const operator = require('../src/operator');
const sum = operator.sum;
const chai = require('Chai');
const expect = chai.expect;
// const should = chai.should();

//Mocha
describe('operator.js Test', () => {
    describe('sum 함수 테스트', () => {
        before(() => {
            console.log("before");
        });
        beforeEach(() => {
           console.log("beforeEach");
        });
        it ('10과 20를 넘기면 30이 나와야 한다.', (done) => {
            let result = sum(10, 20);
            if (result === 30) {
                done();
            } else {
                throw Error('결과 값이 30이 아니다.');
            }
        });
        afterEach(() => {
            console.log("afterEach");
        });
        after(() => {
            console.log("after");
        });
    });
});

// Apply Chai expect
describe('sum 함수 테스트', () => {
    it ('10과 20를 넘기면 30이 나와야 한다', done => {
        let result = sum(10, 20);
        expect(result).to.equal(30);

        //ok : 'string', 1, false, undefined, null
        expect('everything').to.be.ok;
        expect(1).to.be.ok;
        expect(false).to.not.be.ok;
        expect(undefined).to.not.be.ok;
        expect(null).to.not.be.ok;

        //.include vs .have
        expect([1,2,3]).to.include(2);
        // expect([1,2,3]).to.have(2); // error!
        expect([1,2,3]).to.have.property(2);

        var obj = { foo: 'bar' };
        expect(obj).to.include.property('foo');
        expect(obj).to.have.property('foo');

        expect('foobar').to.include.string('bar');
        expect('foobar').to.have.string('bar');

        var deepCss = { '.link': { '[target]': 42 }};
        expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);

        done();
    });
});
