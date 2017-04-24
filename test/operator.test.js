import chai from 'Chai';
const expect = chai.expect;

import { sum } from '../src/operator';

describe('operator.js Test', () => {
    describe('sum 함수 테스트', () => {
        it ('10과 20를 넘기면 30이 나와야 한다.', (done) => {
            expect(sum(10, 20)).to.equal(30);
            done();
        });
    });
});
