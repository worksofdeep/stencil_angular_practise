import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';


export const config: Config = {
  namespace: 'api-test',
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
      componentCorePackage: 'api-test',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/api-lib/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/api-lib/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
