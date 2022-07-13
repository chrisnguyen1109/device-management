export interface ColumnsType<T extends object = any> {
    title: string;
    key: keyof T;
    render?: (value: any) => string;
    width?: number;
}

export interface Pagination {
    limit: number;
    page: number;
}

export interface TableFilter {
    pagination: Pagination;
    searchTerm: string;
}
