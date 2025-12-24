import type { StorybookConfig } from '@storybook/react-native-web-vite';
import tailwindcss from '@tailwindcss/vite';
import { uniwind } from 'uniwind/vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": "@storybook/react-native-web-vite",
  viteFinal: async (config) => {
    config.plugins = [
      ...(config.plugins || []),
      tailwindcss(),
      uniwind({
        cssEntryFile: '../global.css',
      }),
    ];

    return config;
  },
};
export default config;