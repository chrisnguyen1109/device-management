import { Device, TableFilter } from '@/types';

export enum DeviceType {
    ADD = 'addDevice',
    FILTER = 'filterDevice',
    RESET = 'resetFilterDevice',
}

export interface DeviceAdd {
    type: DeviceType.ADD;
    payload: Device;
}

export interface DeviceFilter {
    type: DeviceType.FILTER;
    payload: TableFilter;
}

export interface DeviceResetFilter {
    type: DeviceType.RESET;
    payload: undefined;
}

export type DeviceAction = DeviceAdd | DeviceFilter | DeviceResetFilter;

export interface DeviceState {
    devices: Device[];
    deviceFilter: TableFilter;
}
