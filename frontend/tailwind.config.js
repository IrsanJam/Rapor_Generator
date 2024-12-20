import { nextui } from '@nextui-org/theme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|input|select|ripple|spinner|listbox|divider|popover|scroll-shadow).js',
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
