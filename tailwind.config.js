/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // 包含你的源代码文件
  ],
  theme: {
    extend: {
      colors: {
        'yellow': {
          50: '#fffce1',
          100: '#f8ebd1',
          200: '#ffcf5d',
          300: '#fbbe28',
          400: '#ffde59',
          500: '#ff914d',
        }
      },
    },
    plugins: [],
  }
}

