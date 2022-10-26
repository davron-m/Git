// Функции по умолчанию

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Davron',
}

console.log(newPost(firstPost))