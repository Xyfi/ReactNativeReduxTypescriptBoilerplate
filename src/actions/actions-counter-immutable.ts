import { COUNT_UP_IMMUTABLE } from "../constants/constants-actions-counter-immutable";

export interface ICountUpImmutable {
    (): void;
}

export const countUpImmutable = () => {
    return { type: COUNT_UP_IMMUTABLE };
}
