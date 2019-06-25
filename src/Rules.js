const FERTILE_POPULATION = 3
const STABLE_POPULATION = 2

module.exports = class Rules {

    evaluate(population, previousState){
        let resultState = "dead"

        if(this._isAliveNextTurn(population, previousState)) {
            resultState = "alive"
        }

        return resultState
    }

    _isAliveNextTurn(population, previousState) {
        return this._isFertile(population) || this._isStable(population, previousState)
    }

    _isFertile(population) {
        return population == FERTILE_POPULATION
    }

    _isStable(population, previousState) {
        return population == STABLE_POPULATION && previousState == "alive"
    }
}



