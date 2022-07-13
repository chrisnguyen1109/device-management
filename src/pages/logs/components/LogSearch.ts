import { html } from '@/libs';
import { deviceSelector, filterDevices } from '@/redux/deviceSlice';
import { connect, dispatch } from '@/redux/store';
import { Component, TableFilter } from '@/types';

interface LogSearchProps {
    deviceFilter: TableFilter;
}

const LogSearch: Component<LogSearchProps> = ({ deviceFilter }) => {
    const searchLogHandler = (ev: SubmitEvent) => {
        ev.preventDefault();

        const logNameSearch = document.querySelector(
            'input[name="logNameSearch"]'
        ) as HTMLInputElement;

        dispatch(
            filterDevices({
                searchTerm: logNameSearch.value,
                pagination: {
                    ...deviceFilter.pagination,
                    page: 1,
                },
            })
        );
    };

    window.searchLogHandler = searchLogHandler;

    return html`<form onsubmit="searchLogHandler(event)">
        <input
            name="logNameSearch"
            type="text"
            placeholder="name"
            value="${deviceFilter.searchTerm}"
        />
        <button>Search</button>
    </form>`;
};

export default connect(deviceSelector)(LogSearch);
