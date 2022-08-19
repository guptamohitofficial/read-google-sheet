const { saveData, getData } = require('./database');

export async function createPost() {
    console.log(await saveData('/posts', {name:'name'}));
}

export async function getPosts() {
    console.log(await getData('/posts'));
}
