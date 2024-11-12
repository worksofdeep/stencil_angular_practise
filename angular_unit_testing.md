1. Add an empty .spec.ts file inside respective library folder to start testing

1. Create angular project (optional if already exists)
    $ ng new jestAngular

2. Uninstall all karma jasmine package 
    $ npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

    USE ONLY JEST (BELOW NOT REQUIRED)
    $ npm install jasmine-core @types/jasmine   --> install jasmine
    for error : Cannot find type definition file for 'jasmine'

3. Remove the test object from angular.json

4. Delete karma.config.js file and test.ts file

5. Install the jest package in your project
    $ npm install --save-dev @types/jest jest jest-preset-angular

6. create an empty typescript file inside the app folder --> at 

src/setup.jest.ts:
import 'jest-preset-angular/setup-jest';


7. Modify types and files in tsconfig.spec.json:

    // remove jasmine inside types
    {
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "../../out-tsc/spec",
    "types": [
      "jest",          <-- 1 
      "node"
    ]
  },
  "files": ["./src/setup.jest.ts"],   <-- 2 
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}


8. Add jest configuration and jest scripts in package.json

 "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/src/setup.jest.ts"  // my app level
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/", // workspace level
      "<rootDir>/dist/"          // workspace level
    ],
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.spec.json", // my-app level
        "stringifyContentPathRegex": "\\.html$"
      }
    }
  }

 "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",

    // below scripts
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },

  9. Create tsconfig.spec.json, if not exists in workspace

tsconfig.spec.json:
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "outDir": "../../out-tsc/spec",
      "types": [
        "jest", "node"  
      ]
    },
    "files": ["./projects/my-app/src/setup.jest.ts"],
    "include": [
      "src/**/*.spec.ts",
      "src/**/*.d.ts"
    ]
  }

10. Add CUSTOM_ELEMENTS_SCHEMA in spec file, for unknown element error

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; <-- 1
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]    <-- 2
  }));
});
  