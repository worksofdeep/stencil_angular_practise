import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';


export const config: Config = {
  namespace: 'user-details-form',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'user-details-form',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/user-details-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/user-details-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
