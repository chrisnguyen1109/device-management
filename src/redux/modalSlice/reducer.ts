import { Reducer } from '@/types';
import { ModalAction, ModalState, ModalType } from './types';

const initialState: ModalState = {
    status: false,
    title: null,
    content: null,
};

export const modalReducer: Reducer<ModalState, ModalAction> = (
    state = initialState,
    action
) => {
    switch (action?.type) {
        case ModalType.OPEN: {
            state.status = true;
            state.title = action.payload.title;
            state.content = action.payload.content;

            break;
        }

        case ModalType.CLOSE: {
            state.status = false;
            state.title = null;
            state.content = null;

            break;
        }
    }

    return state;
};
