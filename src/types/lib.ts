export type Action = {
    type: string;
    payload?: any;
};

export type Reducer<
    X extends Record<string, any> = any,
    Y extends Action = any
> = (state: X, action?: Y) => X;

export type Component<T extends Record<string, any> = {}> = (
    props: T & Record<string, any>
) => string;

export type Selector = (state: Record<string, any>) => any;

export type ActionCreator<T extends Action> = T['payload'] extends undefined
    ? () => T
    : (payload: T['payload']) => T;
