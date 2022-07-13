export enum ModalType {
    OPEN = 'openModal',
    CLOSE = 'closeModal',
}

export interface ModalState {
    status: boolean;
    content: string | null;
    title: string | null;
}

export interface ModalOpen {
    type: ModalType.OPEN;
    payload: Omit<ModalState, 'status'>;
}

export interface ModalClose {
    type: ModalType.CLOSE;
    payload: undefined;
}

export type ModalAction = ModalOpen | ModalClose;
