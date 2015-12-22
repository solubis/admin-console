/// <reference path="angularjs/angular.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="lodash/lodash.d.ts" />
/// <reference path="moment/moment-node.d.ts" />
/// <reference path="moment/moment.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="es6-shim/es6-shim.d.ts" />
/// <reference path="flux/flux.d.ts" />
/// <reference path="mocha/mocha.d.ts" />


declare module 'bson' {
    export function ObjectID();
}

declare module 'split.js' {
    export function Split(selectors: any[], options: any);
}
