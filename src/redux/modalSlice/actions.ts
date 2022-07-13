import { ActionCreator } from '@/types';
import { ModalClose, ModalOpen, ModalType } from './types';

export const openModal: ActionCreator<ModalOpen> = payload => ({
    type: ModalType.OPEN,
    payload,
});

export const closeModal: ActionCreator<ModalClose> = () => ({
    type: ModalType.CLOSE,
    payload: undefined,
});
