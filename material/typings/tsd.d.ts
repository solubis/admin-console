/// <reference path="angularjs/angular.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="lodash/lodash.d.ts" />
/// <reference path="moment/moment-node.d.ts" />
/// <reference path="moment/moment.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="../node_modules/immutable/dist/immutable.d.ts" />
/// <reference path="mocha/mocha.d.ts" />
/// <reference path="assertion-error/assertion-error.d.ts" />
/// <reference path="chai/chai.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="es6-shim/es6-shim.d.ts" />
/// <reference path="chance/chance.d.ts" />

declare module 'memoizee' {
    export default function(fn: Function): Function;
}

