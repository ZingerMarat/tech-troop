export const Renderer = () => {
  const renderPosts = (posts) => {
    const $container = $("#posts")
    $container.empty()

    posts.forEach((post) => {
      const $post = $(`
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="comments">
                    
                    </div>
                    <input type="text" placeholder="Got something to say?" class="comment-input">
                    <button class="comment-button">Comment</button>
                    <div class="delete" data-id="${post.id}">Delete Post</div>
                </div>
                `)

        post.comments.forEach(comment => {
            const $commentWrapper = $(`<div class="comment-wrapper"></div>`)
            const $deleteComment = $(`<div class="delete-comment" data-id="${comment.id}">X</div>`)
            const $comment = $(`<div class="comment" data-id="${comment.id}">${comment.text}</div>`)
            $commentWrapper.append($deleteComment, $comment)

            $post.find(".comments").append($commentWrapper)
        })


        $container.append($post)
    })
  }

  return {
    renderPosts,
  }
}
