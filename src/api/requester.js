import { get } from 'axios';

async function getUsers(username) {
    try {
        const response = await get(`https://api.github.com/search/users?q=${username}+in:name+type%3Auser&type=Users`);
        return response.data.items;
    } catch (error) {
        return [];
    }
}

async function getUser(username) {
    try {
        const response = await get(`https://api.github.com/users/${username}`);
        return response;
    } catch (error) {
        return null;
    }
}

export { getUsers, getUser };