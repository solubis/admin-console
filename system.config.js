    System.config({
        defaultJSExtensions: true,
        transpiler: 'babel',
        babelOptions: {
            stage: 0,
            optional: [
                'runtime'
            ]
        },
        paths: {
            'modules.*': 'src/modules/*/index.js'
        },
        map: {
            'babel': 'node_modules/babel-core/browser.js',
            'babel-runtime': 'node_modules/babel-runtime/',
            'core-js': 'node_modules/babel-runtime/node_modules/core-js',
            'angular': 'node_modules/angular/index.js',
            'angular-animate': 'node_modules/angular-animate/index.js',
            'angular-aria': 'node_modules/angular-aria/index.js',
            'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router.js',
            'angular-material': 'node_modules/angular-material/index.js',
            'angular-datatable': 'node_modules/angular-datatable/index.js',
            'angular-components': 'node_modules/angular-components',
            'typescript': 'node_modules/typescript/lib/typescript.js',
            'lodash': 'node_modules/lodash/index.js'
        }
    });
