import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'table-display-tag',
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
      componentCorePackage: 'table-display-tag',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/table-display-lib/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/table-display-lib/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
    //collectCoverage: true, // Enables coverage collection
    //coverageDirectory: 'coverage', // Output directory for coverage reports
    //coverageReporters: ['html', 'text'], // Coverage report formats
  },
};
