import { combineReducers } from "redux";


export default function countReducer(state = '0', action) {
    if (action.type === 'CLICK') {
            return parseInt(state)+action.value;
        }
    // if (action.type === 'INCREMENT' || action.type === 'DECREMENT') {
    //     return parseInt(state)+action.value;
    // }
    return state;
}

// export default combineReducers({
//     box: boxReducer,
//     count: countReducer,
// })