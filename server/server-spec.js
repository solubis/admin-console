var supertest = require('supertest-as-promised');
var api = supertest('http://localhost:8080/api');
var expect = require('chai').expect;
var NO_OF_RECORDS = 100;
function addTestRecords(endpoint, factoryFn, done) {
    var promises = [];
    for (var i = 0; i < NO_OF_RECORDS; i++) {
        var promise = api
            .post(endpoint)
            .send(factoryFn(i))
            .expect(200)
            .toPromise();
        promises.push(promise);
    }
    return Promise
        .all(promises)
        .then(function () {
        if (done && typeof done === 'function') {
            done();
        }
    });
}
describe('Categories', function () {
    beforeEach(function (done) {
        console.log("Truncate database and post " + NO_OF_RECORDS + " test Categories");
        var factoryFn = function (i) { return { id: i, name: "Name of " + i, description: "Description of " + i }; };
        api
            .get('/categories/truncate')
            .expect(204)
            .then(function () { return addTestRecords('/categories', factoryFn, done); });
    });
    it("Get them all", function (done) {
        api
            .get('/categories')
            .expect(200)
            .expect(function (response) {
            expect(response.body.length).to.equal(NO_OF_RECORDS);
        })
            .end(done);
    });
});
describe('Notifications', function () {
    beforeEach(function (done) {
        console.log("Truncate database and post " + NO_OF_RECORDS + " test Notifications");
        var factoryFn = function (i) { return { id: i, text: "Text of " + i, user: "user", date: new Date() }; };
        api
            .get('/notifications/truncate')
            .expect(204)
            .then(function () { return addTestRecords('/notifications', factoryFn, done); });
    });
    it("Get them all", function (done) {
        api
            .get('/notifications')
            .expect(200)
            .expect(function (response) {
            expect(response.body.length).to.equal(NO_OF_RECORDS);
        })
            .end(done);
    });
});
//# sourceMappingURL=server-spec.js.map