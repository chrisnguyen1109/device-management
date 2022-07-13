import { USERNAME } from '@/config';
import { html, activeRoute, navigate } from '@/libs';
import { logoutAuth } from '@/redux/authSlice';
import { resetFilterDevices } from '@/redux/deviceSlice';
import { dispatch } from '@/redux/store';
import { Component } from '@/types';

const Sidebar: Component = () => {
    const logoutHandler = () => {
        dispatch(logoutAuth());
    };

    const navigateDashboard = () => {
        navigate('');

        dispatch(resetFilterDevices());
    };

    const navigateLogs = () => {
        navigate('logs');

        dispatch(resetFilterDevices());
    };

    window.logoutHandler = logoutHandler;
    window.navigateDashboard = navigateDashboard;
    window.navigateLogs = navigateLogs;

    return html`<nav class="sidebar">
        <div class="sidebar__title">
            <div class="sidebar__title__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
                    />
                </svg>
            </div>
            <h3 class="sidebar__title__text">Device Manager</h3>
        </div>
        <div class="sidebar__user">
            <div class="sidebar__profile">
                <div class="header__avatar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                        />
                    </svg>
                </div>
                <h3 class="header__name">welcome ${USERNAME}</h3>
            </div>
        </div>
        <ul class="sidebar__list">
            <li class="sidebar__item" onclick="navigateDashboard()">
                <div class="sidebar__item__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
                        />
                    </svg>
                </div>
                <p class="sidebar__item__text ${activeRoute('')}">Dashboard</p>
            </li>
            <li class="sidebar__item" onclick="navigateLogs()">
                <div class="sidebar__item__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                        />
                    </svg>
                </div>
                <p class="sidebar__item__text ${activeRoute('logs')}">Logs</p>
            </li>
            <li class="sidebar__item" onclick="logoutHandler()">
                <div class="sidebar__item__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                        <path
                            d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                        />
                    </svg>
                </div>
                <p class="sidebar__item__text">Log out</p>
            </li>
        </ul>
    </nav>`;
};

export default Sidebar;
