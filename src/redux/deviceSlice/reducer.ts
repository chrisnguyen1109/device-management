import { DEFAULT_FILTER, STORAGE_DEVICES } from '@/config';
import { Device, Reducer } from '@/types';
import { initialData } from '@/utils';
import { DeviceAction, DeviceState, DeviceType } from './types';

const initialState: DeviceState = {
    devices:
        (JSON.parse(localStorage.getItem(STORAGE_DEVICES)!) as Device[]) ||
        initialData(),
    deviceFilter: DEFAULT_FILTER,
};

export const deviceReducer: Reducer<DeviceState, DeviceAction> = (
    state = initialState,
    action
) => {
    switch (action?.type) {
        case DeviceType.ADD: {
            state.devices.push(action.payload);

            localStorage.setItem(
                STORAGE_DEVICES,
                JSON.stringify(state.devices)
            );

            break;
        }

        case DeviceType.FILTER: {
            state.deviceFilter = action.payload;

            break;
        }

        case DeviceType.RESET: {
            state.deviceFilter = DEFAULT_FILTER;

            break;
        }
    }

    return state;
};
