import { html } from '@/libs';
import { Component } from '@/types';

const LoginForm: Component = () => {
    return html`<div class="login-page">
        <form class="login-form" onsubmit="loginHandler(event)">
            <h2>soiot system</h2>
            <input
                name="username"
                type="text"
                placeholder="username"
                required
            />
            <input
                name="password"
                type="password"
                placeholder="password"
                required
            />
            <button>login</button>
            <p class="message">
                Not registered? <a href="#">Create an account</a>
            </p>
        </form>
    </div>`;
};

export default LoginForm;
