import { render } from '@/redux/store';
import { Component } from '@/types';

export const navigate = (to: string, data: any = {}) => {
    history.pushState(data, '', `/public/${to}`);

    render();
};

window.navigate = navigate;

export const route = (
    path: string,
    component: Component,
    layout?: Component<{ children: Component }>
) => {
    if (document.location.pathname === `/public/${path}`) {
        return layout ? layout({ children: component }) : component({});
    }

    return null;
};

export const activeRoute = (path: string) =>
    document.location.pathname === `/public/${path}`
        ? 'sidebar__item__text--active'
        : '';
