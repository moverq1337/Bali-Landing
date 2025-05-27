FROM node:18-alpine AS build

WORKDIR /app
COPY package.json yarn.lock ./
# Устанавливаем зависимости с подробным логированием
RUN yarn install --verbose > yarn_install.log 2>&1
COPY . .
# Проверяем типы и выполняем сборку с сохранением логов
RUN yarn tsc --project tsconfig.app.json > tsc.log 2>&1 || { echo "TypeScript check failed, check tsc.log"; exit 1; }
RUN yarn build > build.log 2>&1 || { echo "Build failed, check build.log"; exit 1; }

FROM nginx:stable-alpine

# Копируем сгенерированные файлы (если существуют)
COPY --from=build /app/dist /usr/share/nginx/html
# Создаем дефолтный nginx.conf, если файл отсутствует
RUN echo 'server { \
    listen 3000; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf
# Копируем логи для анализа
COPY --from=build /app/yarn_install.log /usr/share/nginx/html/yarn_install.log
COPY --from=build /app/tsc.log /usr/share/nginx/html/tsc.log
COPY --from=build /app/build.log /usr/share/nginx/html/build.log

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]