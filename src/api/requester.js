import { get } from 'axios';

const config = {
    headers: {
    }
};

async function getUsers(username) {
    try {
        const response = await get(`https://api.github.com/search/users?q=${username}+in:name+type%3Auser&type=Users`, config);
        return response.data.items;
    } catch (error) {
        return [];
    }
}

async function getUser(username) {
    try {
        const response = await get(`https://api.github.com/users/${username}`, config);
        return response;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export { getUsers, getUser };