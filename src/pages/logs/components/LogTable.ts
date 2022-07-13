import CustomTable from '@/components/table/CustomTable';
import { html } from '@/libs';
import { deviceSelector, filterDevices } from '@/redux/deviceSlice';
import { connect, dispatch } from '@/redux/store';
import { ColumnsType, Component, Device, TableFilter } from '@/types';
import { getFilterDevices } from '@/utils';

interface LogsTableProps {
    devices: Device[];
    deviceFilter: TableFilter;
}

const LogsTable: Component<LogsTableProps> = ({ devices, deviceFilter }) => {
    const columns: ColumnsType<Device>[] = [
        {
            key: 'id',
            title: 'Device ID#',
        },
        {
            key: 'name',
            title: 'Name',
            render: (value: string) =>
                `<div style="text-transform: capitalize">${value}</div>`,
        },
        {
            key: 'action',
            title: 'Action',
            render: (value: string) =>
                `<div style="text-transform: capitalize">${value}</div>`,
        },
        {
            key: 'date',
            title: 'Date',
        },
    ];

    const onPageChange = (page: number) => {
        dispatch(
            filterDevices({
                ...deviceFilter,
                pagination: {
                    ...deviceFilter.pagination,
                    page,
                },
            })
        );
    };

    const { page, limit } = deviceFilter.pagination;

    const { dataSource, totalData } = getFilterDevices(devices, deviceFilter);

    const pageCount = Math.ceil(totalData / limit);

    return html`<div class="content__table">
        ${CustomTable({
            columns,
            dataSource,
            total: dataSource.length,
            currentPage: page,
            pageCount,
            onPageChange,
        })}
    </div>`;
};

export default connect(deviceSelector)(LogsTable);
