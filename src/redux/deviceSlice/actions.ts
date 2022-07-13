import { ActionCreator } from '@/types';
import {
    DeviceAdd,
    DeviceFilter,
    DeviceResetFilter,
    DeviceType,
} from './types';

export const addDevice: ActionCreator<DeviceAdd> = payload => ({
    type: DeviceType.ADD,
    payload,
});

export const filterDevices: ActionCreator<DeviceFilter> = payload => ({
    type: DeviceType.FILTER,
    payload,
});

export const resetFilterDevices: ActionCreator<DeviceResetFilter> = () => ({
    type: DeviceType.RESET,
    payload: undefined,
});
