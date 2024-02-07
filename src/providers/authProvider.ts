import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: username, password }),
        };

        return fetch(import.meta.env.VITE_REACT_APP_LARAVEL_SERVER_URL_LOGIN, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('token', data.token);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};
