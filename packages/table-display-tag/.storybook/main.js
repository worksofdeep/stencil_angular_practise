// import { join, dirname } from 'path';

// /**
//  * This function is used to resolve the absolute path of a package.
//  * It is needed in projects that use Yarn PnP or are set up within a monorepo.
//  */
// function getAbsolutePath(value) {
//   return dirname(require.resolve(join(value, 'package.json')));
// }

// /** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
// const config = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   addons: [getAbsolutePath('@storybook/addon-webpack5-compiler-swc'), getAbsolutePath('@storybook/addon-essentials'), getAbsolutePath('@chromatic-com/storybook')],
//   framework: {
//     name: getAbsolutePath('@storybook/web-components-webpack5'),
//     options: {},
//   },
// };
// export default config;
/// ===============
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/addon-mdx-gfm")
    // '@chromatic-com/storybook'
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-webpack5'),
    options: {},
  },

  docs: {
    autodocs: true
  }
};
export default config;
