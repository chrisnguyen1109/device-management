import CustomModal from './components/CustomModal';
import MainLayout from './components/layout';
import { html, navigate, route } from './libs';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard';
import LogsManagement from './pages/logs';
import { authSelector } from './redux/authSlice';
import { connect } from './redux/store';
import { Component } from './types';

const App: Component = ({ currentAuth }) => {
    if (!currentAuth && document.location.pathname !== '/public/login') {
        navigate('login');
    }

    return html`<div style="position: relative">
        ${route('login', Login)} ${route('', Dashboard, MainLayout)}
        ${route('logs', LogsManagement, MainLayout)} ${CustomModal({})}
    </div>`;
};

export default connect(authSelector)(App);
