import {
    COUNT_UP
} from "../constants/constants-actions-counter";

const INITIAL_STATE = {
    count: 0
};

export default (state: App.Reducers.Counter = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case COUNT_UP:
            return Object.assign({}, state, { count: state.count + 1 });
        default:
            return state;
    }
};
