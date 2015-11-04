module.exports = function (Category) {
    /**
    * status
    **/
    Category.status = function (cb) {
        cb(null, 'Status OK');
    };
    Category.remoteMethod('status', {
        http: { path: '/status', verb: 'get' },
        returns: { arg: 'status', type: 'string' },
        description: 'Returns test status'
    });
    /**
    * getDescription
    **/
    Category.getDescription = function (id, cb) {
        Category.findById(id, function (err, instance) {
            var response = 'Description is ' + instance.description;
            cb(null, response);
            console.log(response);
        });
    };
    Category.remoteMethod('getDescription', {
        http: { path: '/getDescription', verb: 'get' },
        accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
        returns: { arg: 'description', type: 'string' }
    });
    /**
    * truncate
    **/
    Category.truncate = function (cb) {
        Category.destroyAll(cb);
    };
    Category.remoteMethod('truncate', {
        http: { path: '/truncate', verb: 'get' }
    });
};
//# sourceMappingURL=category.js.map