top-most-directory/
└── packages
    ├── stencil-library/
    │   ├── stencil.config.js
    │   └── src/components
    └── angular-workspace/
        └── projects/
            └── component-library/
                └── src/
                    ├── lib/
                    └── public-api.ts

LERNA
1. npm install --global lerna
2. lerna init                                       --> From your top-most-directory/, initialize a workspace
3. npm install                                      --> # install dependencies
4. npm install typescript @types/node --save-dev    --> # install typescript and node types

--------------------------------------------------------------------

Creating a Stencil Component Library

1. npm init stencil components stencil-library
2. cd stencil-library
3. npm install                                      --> # Install dependencies
4. npm start  --> to run test

-----------------------------------------------------------------------

Creating an Angular Component Library

1. npx -p @angular/cli ng new angular-workspace --no-create-application
2. cd angular-workspace
3. npx -p @angular/cli ng generate library component-library

Delete the component-library.component.ts, component-library.service.ts, and *.spec.ts files.

4. // packages/angular-workspace/projects/component-library/package.json

"peerDependencies": {
   "@angular/common": "^15.1.0",
-  "@angular/core": "^15.1.0"
+  "@angular/core": "^15.1.0",
+  "stencil-library": "*"          --> peer-dependency so import references can be resolved correctly
}

5. # from `/packages/angular-workspace`
npm uninstall jasmine-core @types/jasmine  --> remove jasmine

---------------------------------------------------------------------------

Adding the Angular Output Target

1. npm install @stencil/angular-output-target --save-dev    --> # Install dependency
2. In stencil.config.ts, add the "angularOutputTarget" configuration to the outputTargets array:

import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // Angular target
    {
      type: 'dist',
    },
    angularOutputTarget({              
      componentCorePackage: 'stencil-library',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
};

name in package.json of stencil proj and componentCorePackage should be same

3. npm run build          --> # Build the library and wrappers
   Now have contents in the file specified in directivesProxyFile and directivesArrayFile

4. component-library.module.ts:
    
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class ComponentLibraryModule {}

5. public-api.ts
export * from './lib/component-library.module';
export { DIRECTIVES } from './lib/stencil-generated';
export * from './lib/stencil-generated/components';

-----------------------------------------------------------------------

Link Your Packages (Optional)

1. npm link   --> # Link the working directory from stencil proj
2. npm link name-of-your-stencil-package  --> # Link package name, from Angular component library's directory
    name-of-your-stencil-package => name in stencil component  library's package.json.

3. npm run build  --> inside stencil proj to build changes for angular comp lib

----------------------------------------------------------------------------

Angular with Modules - Creating a Consumer Angular App

1. npx -p @angular/cli ng generate app my-app --standalone=false
    From your Angular workspace (/packages/angular-workspace)

2. npx -p @angular/cli ng build component-library  
    From (/packages/angular-workspace)

3. app.module.ts:
import { ComponentLibraryModule } from 'component-library';

@NgModule({
  imports: [ComponentLibraryModule],
})
export class AppModule {}

OR

import { MyComponent } from 'component-library';

@NgModule({
  declarations: [MyComponent],
  exports: [MyComponent],
})
export class AppModule {}

4. app.component.html:
<my-component first="Your" last="Name"></my-component>