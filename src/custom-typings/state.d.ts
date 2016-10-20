/// <reference types="immutable" />

declare namespace App {
    interface State {
        counter: Reducers.Counter;
        counterImmutable: Map<string, any>;
    }

    namespace Reducers {
        interface Counter {
            count: number;
        }
    }
}
