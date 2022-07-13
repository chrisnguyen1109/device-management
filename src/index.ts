import App from './App';
import { attach } from './redux/store';

declare global {
    interface Window {
        navigate: any;
        loginHandler: any;
        logoutHandler: any;
        addDeviceHandler: any;
        searchLogHandler: any;
        openAnalyticsModal: any;
        openAddDivceModal: any;
        closeModalFromIcon: any;
        closeModalFromBackground: any;
        prevPageHandler: any;
        nextPageHandler: any;
        selectedPageHandler: any;
        navigateDashboard: any;
        navigateLogs: any;
        openSidebar: any;
        closeSidebar: any;
    }
}

attach(App, document.querySelector('#root')!);
