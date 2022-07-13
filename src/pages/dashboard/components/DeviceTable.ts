import CustomTable from '@/components/table/CustomTable';
import { html } from '@/libs';
import { deviceSelector, filterDevices } from '@/redux/deviceSlice';
import { connect, dispatch } from '@/redux/store';
import { ColumnsType, Component, Device, TableFilter } from '@/types';
import { formatDate, getFilterDevices } from '@/utils';

interface DeviceTableProps {
    devices: Device[];
    deviceFilter: TableFilter;
}

const DeviceTable: Component<DeviceTableProps> = ({
    devices,
    deviceFilter,
}) => {
    const columns: ColumnsType<Device>[] = [
        {
            key: 'name',
            title: 'Devices',
            render: (value: string) =>
                `<div style="text-transform: capitalize">${value}</div>`,
        },
        {
            key: 'mac',
            title: 'Mac Address',
        },
        {
            key: 'ip',
            title: 'IP',
        },
        {
            key: 'createdDate',
            title: 'Created Date',
            render: (value: string) => `<div>${formatDate(value)}</div>`,
        },
        {
            key: 'power',
            title: 'Power Consumption (Kw/H)',
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

    const total = dataSource.reduce((prev, cur) => prev + cur.power, 0);

    return html`<div class="content__table">
        ${CustomTable({
            columns,
            dataSource,
            total,
            currentPage: page,
            pageCount,
            onPageChange,
        })}
    </div>`;
};

export default connect(deviceSelector)(DeviceTable);
