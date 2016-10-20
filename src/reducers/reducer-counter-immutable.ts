import { Map } from "immutable";

import { COUNT_UP_IMMUTABLE } from "../constants/constants-actions-counter-immutable";

const INITIAL_STATE = Map({
    count: 0
});

export default (state: Map<string, any> = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case COUNT_UP_IMMUTABLE:
            return state.update("count", (value: number) => value + 1);
        default:
            return state;
    }
} ;
