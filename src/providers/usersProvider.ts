import jsonServerProvider from 'ra-data-json-server';

const jsonServerUrl = import.meta.env.VITE_JSON_SERVER_URL;
const userJsonUrl = import.meta.env.USER_JSON_URL;

export const userProvider = jsonServerProvider(userJsonUrl);
