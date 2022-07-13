import { Device, TableFilter } from '@/types';

export const getFilterDevices = (
    devices: Device[],
    deviceFilter: TableFilter
) => {
    const start =
        (deviceFilter.pagination.page - 1) * deviceFilter.pagination.limit;

    const matchingDevices = devices.filter(device =>
        device.name.includes(deviceFilter.searchTerm.toLowerCase())
    );

    return {
        dataSource: matchingDevices.slice(
            start,
            start + deviceFilter.pagination.limit
        ),
        totalData: matchingDevices.length,
    };
};
