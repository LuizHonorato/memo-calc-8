import toastr from 'toastr'
import 'modules/toastr/build/toastr.min.css'

const INITIAL_STATE = {number: 0,
                       btns: ["±","%","Back","C","7","8","9","+","4","5","6","-","1","2","3","/","0",".","=","*"],
                       operations: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NUMBER_ADDED':
            return {...state, number: state.number == 0 ? action.payload : state.number + action.payload}
        case 'DISPLAY_CLEAR':
            return {...state, number: 0}
        case 'IS_EQUAL':
            if (state.operations.length < 8) {
                state.operations.push(state.number.toString())
            } else {
                toastr.warning('Por favor, exclua um item da memória da calculadora para armazenar mais cálculos.', 'Atenção!')
            }
            return {...state, number: eval(action.payload).toString(), operations: state.operations } 
        case 'BACK_PRESSED':
            var str = action.payload
            return {...state, number: str.slice(0, -1)}
        case 'SIGN_CONVERTED':
            var num = parseInt(action.payload)
            return {...state, number: -Math.abs(num)}
        case 'RECALL_MATH':
            return {...state, number: eval(action.payload).toString()}
        case 'MEMO_ITEM_DELETED':
            return {...state, operations: [...state.operations.slice(0, action.payload), ...state.operations.slice(action.payload + 1)]}
        default:
            return state
    }
}