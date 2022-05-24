const {assert} = require('chai');
const {fibonacci} = require ('./fibonacci')

describe('fibonacci test',()=>{
    it('expects the 1st term of the fibonacci series(1)',()=>{
        assert.equal(fibonacci(1),1)
    })
    it('expects the 2nd term of the fibonacci series(1)',()=>{
        assert.equal(fibonacci(2),1)
    })
    it('expects the 3rd term of the fibonacci series(2)',()=>{
        assert.equal(fibonacci(3),2)
    })
    it('expects the 7th term of the fibonacci series(13)',()=>{
        assert.equal(fibonacci(7),13)
    })
    it('expects the 12th term of the fibonacci series(144)',()=>{
        assert.equal(fibonacci(12),144)
    })
})