export enum DeviceAction {
    TURN_ON = 'turn on',
    SLEEP = 'sleep',
    TURN_OFF = 'turn off',
}

export interface Device {
    id: string;
    name: string;
    mac: string;
    ip: string;
    createdDate: Date;
    power: number;
    action: DeviceAction;
    date: number;
}
