var assert = require("assert")
var Rules = require("../src/Rules")

describe("Game of life rules", function(){

    it("does not resurrect when there are no alive neighbours", function(){
        const rules = new Rules()
        const aliveNeighboursCount = 0
        const state = "dead"
        
        const result = rules.evaluate(aliveNeighboursCount, state)
        
        assert.equal(result, "dead")
    })
       
    it("any live cell with fewer than two live neighbours dies", function(){
        const rules = new Rules()
        const aliveNeighboursCount = 1
        const state = "alive"

        const result = rules.evaluate(aliveNeighboursCount, state)

        assert.equal(result, "dead")
    })
       
    it("any live cell with two or three live neighbours lives on to the next generation", function(){
        const rules = new Rules()
        const aliveNeighboursCount = 2
        const state = "alive"

        const result = rules.evaluate(aliveNeighboursCount, state)

        assert.equal(result, "alive")
    })
        
    it("any live cell with more than three live neighbours dies", function(){
        const rules = new Rules()
        const aliveNeighboursCount = 4
        const state = "alive"

        const result = rules.evaluate(aliveNeighboursCount, state)

        assert.equal(result, "dead")
    })
        
    it("any dead cell with exactly three live neighbours becomes a live cell", function(){
        const rules = new Rules()
        const aliveNeighboursCount = 3
        const state = "dead"

        const result = rules.evaluate(aliveNeighboursCount, state)

        assert.equal(result, "alive")
    })

    it("any dead cell with two or less neighbours remains dead", function() {
        const rules = new Rules()
        const aliveNeighboursCount = 2
        const state = "dead"

        const result = rules.evaluate(aliveNeighboursCount, state)

        assert.equal(result, "dead")
    })
})