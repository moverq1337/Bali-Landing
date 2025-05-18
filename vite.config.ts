import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		host: true, // Слушать все доступные сетевые интерфейсы
		port: 5173, // Стандартный порт Vite
		allowedHosts: ['smol-bali.ru'], // Разрешенные хосты
	},
})
