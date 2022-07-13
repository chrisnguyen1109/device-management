import { html } from '@/libs';
import { ColumnsType, Component } from '@/types';
import CustomPagination from './CustomPagination';

interface CustomTableProps {
    columns: ColumnsType[];
    dataSource: Record<string, any>[];
    total: number;
}

interface CustomTableWithoutPaginationProps extends CustomTableProps {
    showPagination: false;
    currentPage?: never;
    pageCount?: never;
    onPageChange?: never;
}

interface CustomTableWithPaginationProps extends CustomTableProps {
    showPagination?: true;
    currentPage: number;
    pageCount: number;
    onPageChange: (page: number) => void;
}

const CustomTable: Component<
    CustomTableWithoutPaginationProps | CustomTableWithPaginationProps
> = ({
    columns,
    dataSource,
    total,
    showPagination = true,
    currentPage,
    onPageChange,
    pageCount,
}) => {
    return html`<div>
        <div class="responsive-table">
            <table>
                <thead>
                    <tr>
                        ${columns.map(
                            column => `<th><div>${column.title}</div></th>`
                        )}
                    </tr>
                </thead>
                <tbody>
                    ${dataSource.map(
                        data =>
                            `<tr>${columns
                                .map(
                                    column =>
                                        `<td><div>${
                                            column.render
                                                ? column.render(
                                                      data[column.key as string]
                                                  )
                                                : data[column.key as string]
                                        }</div></td>`
                                )
                                .join('')}</tr>`
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="${columns.length - 1}">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        ${showPagination &&
        CustomPagination({
            currentPage: currentPage!,
            onPageChange: onPageChange!,
            pageCount: pageCount!,
        })}
    </div>`;
};

export default CustomTable;
