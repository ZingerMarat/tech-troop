const postsArray = [
    {
        name: 'aaa',
        post: 'a_a_a'
    },
    {
        name: 'bbb',
        post: 'b_b_b'
    }
]

const render = () => {
    document.getElementById('blog').innerHTML = ''

    postsArray.forEach((post, index) => {
        const newPost = document.createElement('div')
        newPost.innerText = post.name + ':' + post.post
        newPost.onclick = () => deleteHandler(index)

        document.getElementById('blog').appendChild(newPost)
    })
}

const clickHandler = () => {
    const name = document.getElementById('name')
    const post = document.getElementById('wish')

    const newPost = {name: name.value, post: post.value}
    postsArray.push(newPost)

    name.value = ''
    post.value = ''
    render()
}

const deleteHandler = (index) => {
    postsArray.splice(index, 1)
    render()

}

render()