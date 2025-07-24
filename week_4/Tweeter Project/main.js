import { Renderer } from "./render.js";
import { Tweeter } from "./model.js";

const render = Renderer()
const tweeter = Tweeter()

render.renderPosts(tweeter.getPosts())

document.getElementById("posts").addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')){
        const postID = event.target.dataset.id

        tweeter.removePost(postID)
        render.renderPosts(tweeter.getPosts())
    }

    if (event.target.classList.contains('delete-comment')){
        const postID = event.target.closest(".post").dataset.id
        const commentID = event.target.dataset.id        
        
        tweeter.removeComment(postID, commentID)
        render.renderPosts(tweeter.getPosts())
    }

    if (event.target.classList.contains('comment-button')){
        const post = event.target.closest(".post")
        const postId = post.dataset.id

        const input = post.querySelector('.comment-input')
        const newComment = input.value.trim()

        tweeter.addComment(postId, newComment)
        render.renderPosts(tweeter.getPosts())
    }
})

document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('tweet-input')
    const newTweet = input.value.trim()

    tweeter.addPost(newTweet)
    render.renderPosts(tweeter.getPosts())
})