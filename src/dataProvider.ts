// in src/dataProvider.ts
import { fetchUtils, DataProvider } from "react-admin";
import { stringify } from "query-string";
import { Options } from "ra-core";

const apiUrl = 'http://localhost:8080/v1';

// option.headers的类型如果不是Header则无效
const httpClient = (url: string, options: Options = {}) => {
    const token = localStorage.getItem('token');
    if (token) {
        if (options.headers === null || !(options.headers instanceof Headers)) {
            options.headers = new Headers();
        }
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

// TypeScript users must reference the type `DataProvider`
export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            pagination_page: page,
            pagination_per_page: perPage,
            sort_field: field,
            sort_order: order,
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json.data,
            total: parseInt((headers.get('Content-Range') || 'items */0').split('/').pop() || '0', 10),
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json.data,
        })),

    getMany: (resource, params) => {
        const query = {
            ids: params.ids
        };

        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json.data }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            pagination_page: page,
            pagination_per_page: perPage,
            sort_field: field,
            sort_order: order,
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json.data,
            total: parseInt((headers.get('Content-Range') || 'items */0').split('/').pop() || '0', 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json.data })),

    updateMany: (resource, params) => {
        const query = {
            ids: params.ids,
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json.data }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            ids: params.ids,
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json.data }));
    }
};