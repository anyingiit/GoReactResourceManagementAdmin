// in src/authProvider.ts
import { fetchUtils, AuthProvider } from "react-admin";
import { stringify } from "query-string";
const httpClient = fetchUtils.fetchJson;

// TypeScript users must reference the type: `AuthProvider`
export const authProvider: AuthProvider = {
    // called when the user attempts to log in
    login: ({ username, password }: { username: string, password: string }) => {
        const url = `http://localhost:8080/v1/public/token`;

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        return httpClient(url, {
            method: 'POST',
            body: formData,
        })
            .then(({ json }) => {
                localStorage.setItem('token', json.data.token);

                return httpClient(`http://localhost:8080/v1/user/info`, {
                    method: 'GET',
                    headers: new Headers({
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    })
                })
                    .then(({ json }) => {
                        // console.log(json)
                        localStorage.setItem('username', json.data.username);
                        localStorage.setItem('role', json.data.role);

                        return Promise.resolve();
                    })
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");

        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem("token")
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};