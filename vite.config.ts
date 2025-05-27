import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts(),
		checker({
			typescript: {
				tsconfigPath: 'tsconfig.app.json', // Указываем tsconfig для клиентской части
			},
		}),
	],
	resolve: {
		alias: {
			src: '/src',
		},
	},
	build: {
		// Подробные логи при сборке (допустимые значения: 'info', 'warn', 'error', 'silent')
		rollupOptions: {
			logLevel: 'info', // Логирование на уровне Rollup
		},
		sourcemap: true, // Генерация sourcemaps для отладки
		minify: false, // Отключение минификации для читаемого вывода
	},
	define: {
		global: 'window', // Шим для global, чтобы минимизировать зависимость от global.d.ts
		'process.env': {}, // Шим для process.env, если требуется
	},
})
