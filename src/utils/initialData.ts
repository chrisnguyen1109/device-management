import { STORAGE_DEVICES } from '@/config';
import { Device, DeviceAction } from '@/types';
import { getRandomInt } from './getRandomInt';
import { makeId } from './makeId';

const SAMPLE_NAMES = [
    'tv',
    'washer',
    'selling fan',
    'refrigerator',
    'laptop',
    'computer',
    'air conditioning',
];

const fakeDevice = (): Device => {
    const deviceActions = Object.values(DeviceAction);

    return {
        id: makeId(),
        name: SAMPLE_NAMES[Math.floor(Math.random() * SAMPLE_NAMES.length)],
        ip: '127.0.0.1',
        createdDate: new Date(),
        mac: '00:18:44:11:3A:87',
        action: deviceActions[Math.floor(Math.random() * deviceActions.length)],
        power: getRandomInt(100, 1000),
        date: Date.now(),
    };
};

export const initialData = (length: number = 20) => {
    const fakeData = Array.from({ length }, () => fakeDevice());

    localStorage.setItem(STORAGE_DEVICES, JSON.stringify(fakeData));

    return fakeData;
};
