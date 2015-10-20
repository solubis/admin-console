System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "lib/npm/*",
    "modules.*": "src/modules/*/index.ts",
    "github:*": "lib/github/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-animate": "github:angular/bower-angular-animate@1.4.7",
    "angular-aria": "github:angular/bower-angular-aria@1.4.7",
    "angular-components": "npm:angular-components@0.0.1",
    "angular-datatable": "github:solubis/angular-datatable@0.8.8",
    "angular-material": "github:angular/bower-material@0.11.4",
    "angular-messages": "github:angular/bower-angular-messages@1.4.7",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "animate.css": "github:daneden/animate.css@3.4.0",
    "solubis/angular-datatable": "github:solubis/angular-datatable@master",
    "typescript": "npm:typescript@1.6.2",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-animate@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-aria@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-material@0.11.4": {
      "angular": "github:angular/bower-angular@1.4.7",
      "angular-animate": "github:angular/bower-angular-animate@1.4.7",
      "angular-aria": "github:angular/bower-angular-aria@1.4.7",
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular-components@0.0.1": {
      "jsrsasign": "npm:jsrsasign@5.0.1",
      "moment": "npm:moment@2.10.6"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jsrsasign@5.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:moment@2.10.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
