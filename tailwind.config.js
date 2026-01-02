import preset from './src/tailwind/preset'

export default {
  presets: [preset],
  content: [
    './index.html',
    './App.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './frappe/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-card-shadow-1': '3.9px 15.59px 23.39px 0px rgba(0, 0, 0, 0.12)',
      },
      fontSize: {
        // Custom class: 'text-custom-input-header'
        'custom-input-header': [
          '14px',
          {
            lineHeight: '1.35',
            fontWeight: '400',
          },
        ],
        'custom-form-header': [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
        'custom-link': [
          '14px',
          {
            lineHeight: '1.25',
            fontWeight: '500',
          },
        ],
        'custom-button': [
          '14px',
          {
            lineHeight: '1.25',
            fontWeight: '500',
          },
        ],
        'custom-header-24': [
          '24px',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        'custom-header-18': [
          '18px',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        'custom-text': [
          '14px',
          {
            lineHeight: '1.25',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
}
