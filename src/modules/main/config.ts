declare var window: any;

let host = window.location.protocol + '//' + window.location.hostname;
let port = window.location.port || '80';

let config  = {
    'version': '1.0',

    'maxFileAttachmentSize': 10485760,
    'debugEnabled': false,
    'mockupEnabled': false,
    'redirectToLoginTimeout': 0,

    'restURL': `${host}:8080/api`,
    'loginURL': `${host}:${port}/login/src/index.html`
};

window.CONFIG = config;

export default config;
