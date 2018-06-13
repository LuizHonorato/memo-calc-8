import {combineReducers} from 'redux'
import calculatorReducer from '../calculator/calculatorReducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer
})

export default rootReducer