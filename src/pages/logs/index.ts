import { html } from '@/libs';
import { Component } from '@/types';
import LogSearch from './components/LogSearch';
import LogTable from './components/LogTable';

const LogsManagement: Component = () => {
    return html`<div class="content__control">
            <h3>Action Logs</h3>
            ${LogSearch({})}
        </div>
        ${LogTable({})}`;
};

export default LogsManagement;
