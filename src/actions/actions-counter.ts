import { COUNT_UP } from "../constants/constants-actions-counter";

export interface ICountUp {
    (): void;
};

export const countUp: ICountUp = () => ({
    type: COUNT_UP
});
