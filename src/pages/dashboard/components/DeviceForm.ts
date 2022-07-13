import { html } from '@/libs';
import { addDevice } from '@/redux/deviceSlice';
import { closeModal } from '@/redux/modalSlice';
import { dispatch } from '@/redux/store';
import { Component, Device, DeviceAction } from '@/types';
import { getRandomInt, makeId } from '@/utils';

const DeviceForm: Component = () => {
    const addDeviceHandler = (ev: SubmitEvent) => {
        ev.preventDefault();

        const name = document.querySelector(
            'input[name="name"]'
        ) as HTMLInputElement;
        const ip = document.querySelector(
            'input[name="ip"]'
        ) as HTMLInputElement;

        const deviceActions = Object.values(DeviceAction);

        const newDevice: Device = {
            id: makeId(),
            name: name.value,
            ip: ip.value,
            createdDate: new Date(),
            mac: '00:18:44:11:3A:87',
            action: deviceActions[
                Math.floor(Math.random() * deviceActions.length)
            ],
            power: getRandomInt(100, 1000),
            date: Date.now(),
        };

        dispatch(addDevice(newDevice));

        dispatch(closeModal());
    };

    window.addDeviceHandler = addDeviceHandler;

    return html`<form class="device-form" onsubmit="addDeviceHandler(event)">
        <input name="name" type="text" placeholder="name" required />
        <input
            name="ip"
            type="text"
            placeholder="ip"
            pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
            required
        />
        <button>add device</button>
    </form>`;
};

export default DeviceForm;
