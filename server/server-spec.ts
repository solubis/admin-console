let supertest = require('supertest-as-promised');
let api = supertest('http://localhost:8080/api');
let expect = require('chai').expect;

const NO_OF_RECORDS = 100;

function addTestRecords(endpoint, factoryFn, done?: Function) {
    let promises = [];

    for (let i = 0; i < NO_OF_RECORDS; i++) {
        let promise = api
            .post(endpoint)
            .send(factoryFn(i))
            .expect(200)
            .toPromise();

        promises.push(promise);
    }

    return Promise
        .all(promises)
        .then(() => {
            if (done && typeof done === 'function') {
                done();
            }
        });
}

describe('Categories', () => {
    beforeEach((done) => {
        console.log(`Truncate database and post ${NO_OF_RECORDS} test Categories`);

        let factoryFn = (i: number) => { return { id: i, name: `Name of ${i}`, description: `Description of ${i}` }; };

        api
            .get('/categories/truncate')
            .expect(204)
            .then(() => addTestRecords('/categories', factoryFn, done));
    });

    it(`Get them all`, (done) => {
        api
            .get('/categories')
            .expect(200)
            .expect(response => {
                expect(response.body.length).to.equal(NO_OF_RECORDS);
            })
            .end(done);
    });
});

describe('Notifications', () => {
    beforeEach((done) => {
        console.log(`Truncate database and post ${NO_OF_RECORDS} test Notifications`);

        let factoryFn = (i: number) => { return { id: i, text: `Text of ${i}`, user: `user`, date: new Date() }; };

        api
            .get('/notifications/truncate')
            .expect(204)
            .then(() => addTestRecords('/notifications', factoryFn, done));
    });

    it(`Get them all`, (done) => {
        api
            .get('/notifications')
            .expect(200)
            .expect(response => {
                expect(response.body.length).to.equal(NO_OF_RECORDS);
            })
            .end(done);
    });
});
