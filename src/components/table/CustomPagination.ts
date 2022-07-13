import { html } from '@/libs';
import { Component } from '@/types';

interface CustomPaginationProps {
    currentPage: number;
    pageCount: number;
    onPageChange: (page: number) => void;
}

const CustomPagination: Component<CustomPaginationProps> = ({
    currentPage,
    pageCount,
    onPageChange,
}) => {
    const prevPageHandler = () => {
        if (currentPage === 1) return;

        onPageChange(currentPage - 1);
    };

    const nextPageHandler = () => {
        if (currentPage === pageCount) return;

        onPageChange(currentPage + 1);
    };

    const selectedPageHandler = (ev: MouseEvent) => {
        const selectedPage = +(ev.target as HTMLElement).dataset.page!;

        onPageChange(selectedPage);
    };

    window.prevPageHandler = prevPageHandler;
    window.nextPageHandler = nextPageHandler;
    window.selectedPageHandler = selectedPageHandler;

    return html`<ul class="pagination">
        ${currentPage > 1 &&
        `<li class="pagination__item" onclick="prevPageHandler()"><<</li>`}
        ${Array.from(
            { length: pageCount },
            (_, i) =>
                `<li class="pagination__item ${
                    currentPage === i + 1 ? 'pagination__item--active' : ''
                }" onclick="selectedPageHandler(event)" data-page="${i + 1}">${
                    i + 1
                }</li>`
        ).join('')}
        ${currentPage < pageCount &&
        `<li onclick="nextPageHandler()" class="pagination__item">>></li>`}
    </ul>`;
};

export default CustomPagination;
