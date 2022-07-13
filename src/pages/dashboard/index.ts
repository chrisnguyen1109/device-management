import { html } from '@/libs';
import { openModal } from '@/redux/modalSlice';
import { dispatch } from '@/redux/store';
import { Component } from '@/types';
import DeviceChart from './components/DeviceChart';
import DeviceForm from './components/DeviceForm';
import DeviceTable from './components/DeviceTable';

const Dashboard: Component = () => {
    const openAnalyticsModal = () => {
        dispatch(
            openModal({
                title: 'Analytics',
                content: DeviceChart({}),
            })
        );
    };

    const openAddDivceModal = () => {
        dispatch(
            openModal({
                title: 'Add Device',
                content: DeviceForm({}),
            })
        );
    };

    window.openAnalyticsModal = openAnalyticsModal;
    window.openAddDivceModal = openAddDivceModal;

    return html`<div class="content__actions">
            <button class="content__btn" onclick="openAnalyticsModal()">
                View Analytics
            </button>
            <button class="content__btn" onclick="openAddDivceModal()">
                Add Device
            </button>
        </div>
        ${DeviceTable({})}`;
};

export default Dashboard;
