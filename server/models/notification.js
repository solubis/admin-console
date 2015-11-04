module.exports = function (Notification) {
    /**
    * truncate
    **/
    Notification.truncate = function (cb) {
        Notification.destroyAll(cb);
    };
    Notification.remoteMethod('truncate', {
        http: { path: '/truncate', verb: 'get' }
    });
};
//# sourceMappingURL=notification.js.map