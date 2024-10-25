import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';


export const config: Config = {
  namespace: 'form-library',
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
      componentCorePackage: 'form-library',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/angular-form-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/angular-form-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};


