const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('REST test', () => {
    it('request to server', done => {
        chai.request(url)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET', () => {
    it('fetch all users', done => {
        chai.request(url)
            .get('/users')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('fetch one user', done => {
        chai.request(url)
            .get('/users')
            .query({id: 1})
            .end((err, res) => {
                expect(err).to.be.not.ok;
                expect(res).to.have.status(200);
                expect(res.body[0]).to.deep.equal(
                    {
                        id: 1,
                        name: "Jbee",
                        age: 25
                    }
                );
                done();
            });
    });
});

describe('DELETE', () => {
    it('delete user', done => {
        chai.request(url)
            .delete('/users/4')
            .end((err, res) => {
                expect(err).to.be.not.ok;
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('POST', () => {
    it('add user', done => {
        chai.request(url)
            .post('/users')
            .send({id: 4, name: 'Jbee', age: 25})
            .end((err, res) => {
                expect(err).to.be.not.ok;
                expect(res).to.have.status(201);
                user = res.body;
                done();
            });
    });
});

describe('PATCH', () => {
    it('update user', done => {
        chai.request(url)
            .patch(`/users/4`)
            .send({name: 'angular', age: 1})
            .end((err, res) => {
                expect(err).to.be.not.ok;
                expect(res).to.have.status(200);
                done();
            });
    });
});
