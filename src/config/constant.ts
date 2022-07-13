import { TableFilter } from '@/types';

export const USERNAME = 'john';

export const PASSWORD = '1234';

export const STORAGE_AUTH = 'checkLogin';

export const STORAGE_DEVICES = 'devices';

export const DEFAULT_FILTER: TableFilter = {
    pagination: {
        page: 1,
        limit: 10,
    },
    searchTerm: '',
};
