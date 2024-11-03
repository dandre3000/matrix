import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: './src/Matrix.js',
			name: 'Matrix',
			fileName: 'main',
			formats: ['es']
		},
		outDir: '',
		emptyOutDir: false
	}
})