    System.config({
        defaultJSExtensions: true,
        transpiler: 'typescript',
        map: {
            'angular': 'node_modules/angular/index.js',
            'angular-animate': 'node_modules/angular-animate/index.js',
            'angular-aria': 'node_modules/angular-aria/index.js',
            'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router.js',
            'angular-material': 'node_modules/angular-material/dist/angular-material.js',
            'angular-datatable': 'node_modules/angular-datatable/index.js',
            'typescript': 'node_modules/typescript/lib/typescript.js',
            'lodash': 'node_modules/lodash/index.js'
        },
        paths: {
            'modules.*': 'src/modules/*/index.ts',
            'app': 'src/modules/app'
        },
        packages: {
            'src/modules': {
                defaultExtension: 'ts'
            }
        }
    });
