import { Action, Component, Reducer, Selector } from '@/types';

export const combineReducers =
    (reducers: Record<string, Reducer>) =>
    (state: Record<string, any> = {}, action: Action) =>
        Object.keys(reducers).reduce((nextState: Record<string, any>, key) => {
            nextState[key] = reducers[key](state[key], action);

            return nextState;
        }, {});

export const createStore = (reducer: Reducer) => {
    let state = reducer({});
    const roots = new Map<Element, Component>();

    const render = () => {
        for (const [root, component] of roots) {
            const output = component({});

            root.innerHTML = output;
        }
    };

    return {
        attach(component: Component, root: Element) {
            roots.set(root, component);
            render();
        },
        connect(selector: Selector = state => state) {
            return (component: Component<any>) =>
                (props: Record<string, any> = {}) =>
                    component(Object.assign({}, props, selector(state)));
        },
        dispatch(action: Action) {
            state = reducer(state, action);
            render();
        },
        render,
    };
};
