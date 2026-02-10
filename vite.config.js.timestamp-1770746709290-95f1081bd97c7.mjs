// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/Paul/Codeworks/Week%206-Front-End%20Frameworks/fine_arts/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Paul/Codeworks/Week%206-Front-End%20Frameworks/fine_arts/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/Paul/Codeworks/Week%206-Front-End%20Frameworks/fine_arts/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import eslintPlugin from "file:///C:/Users/Paul/Codeworks/Week%206-Front-End%20Frameworks/fine_arts/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Paul/Codeworks/Week%206-Front-End%20Frameworks/fine_arts/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    eslintPlugin({
      overrideConfigFile: "eslint.config.js"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    sourcemap: false
  },
  server: {
    port: 8080
  }
  // NOTE If deploying to gh-pages uncomment the line below (https://vitejs.dev/config/shared-options.html#base)
  // base: '/fine_arts/'
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQYXVsXFxcXENvZGV3b3Jrc1xcXFxXZWVrIDYtRnJvbnQtRW5kIEZyYW1ld29ya3NcXFxcZmluZV9hcnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQYXVsXFxcXENvZGV3b3Jrc1xcXFxXZWVrIDYtRnJvbnQtRW5kIEZyYW1ld29ya3NcXFxcZmluZV9hcnRzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QYXVsL0NvZGV3b3Jrcy9XZWVrJTIwNi1Gcm9udC1FbmQlMjBGcmFtZXdvcmtzL2ZpbmVfYXJ0cy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgb3ZlcnJpZGVDb25maWdGaWxlOiAnZXNsaW50LmNvbmZpZy5qcycsXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODA4MFxuICB9LFxuXG4gIC8vIE5PVEUgSWYgZGVwbG95aW5nIHRvIGdoLXBhZ2VzIHVuY29tbWVudCB0aGUgbGluZSBiZWxvdyAoaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9zaGFyZWQtb3B0aW9ucy5odG1sI2Jhc2UpXG4gIC8vIGJhc2U6ICcvZmluZV9hcnRzLydcbn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVgsU0FBUyxlQUFlLFdBQVc7QUFDNVosU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBSm9OLElBQU0sMkNBQTJDO0FBUTlSLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxNQUNYLG9CQUFvQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUE7QUFBQTtBQUlGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
