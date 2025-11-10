import iconify from '@iconify/tailwind4'

export default {
  content: [
    './index.html',
    './yoo.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconify({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json'),
        lucide: () => import('@iconify-json/lucide/icons.json'),
        simple: () => import('@iconify-json/simple-icons/icons.json'),
      },
    }),
  ],
}



module.exports = {
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {},
    screens: {
      'md980': {'max': '980px'}, // custom breakpoint
    },
  },
  plugins: [],
}
