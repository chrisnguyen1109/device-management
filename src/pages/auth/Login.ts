import { PASSWORD, USERNAME } from '@/config';
import { html, navigate } from '@/libs';
import { loginAuth } from '@/redux/authSlice';
import { dispatch } from '@/redux/store';
import { Component } from '@/types';
import LoginForm from './components/LoginForm';

const Login: Component = () => {
    const loginHandler = (ev: SubmitEvent) => {
        ev.preventDefault();

        const username = document.querySelector(
            'input[name="username"]'
        ) as HTMLInputElement;
        const password = document.querySelector(
            'input[name="password"]'
        ) as HTMLInputElement;

        if (username.value !== USERNAME || password.value !== PASSWORD) {
            alert('Incorrect username or password 😢. Please try again!');
            return;
        }

        dispatch(loginAuth());

        navigate('');
    };

    window.loginHandler = loginHandler;

    return html`${LoginForm({})}`;
};

export default Login;
