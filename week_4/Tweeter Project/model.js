const posts = [
  {
    text: "First post!",
    id: "p1",
    comments: [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ],
  },
  {
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
      { id: "c4", text: "Don't worry second poster, you'll be first one day." },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
    ],
  },
]

export const Tweeter = () => {
  let _posts = posts
  let _postIdCounter = posts.length
  let _commentIdCounter = posts.reduce((acc, post) => acc + post.comments.length, 0)

  const getPosts = () => {
    return _posts.sort((a, b) => b.id.slice(1) - a.id.slice(1))
  }

  const addPost = (text) => {
    const id = "p" + ++_postIdCounter
    const comments = []
    _posts.push({
      text,
      id,
      comments,
    })
  }

  const removePost = (postID) => {
    _posts = _posts.filter((post) => post.id !== postID)
  }

  const addComment = (postID, text) => {
    const post = _posts.find((post) => post.id === postID)

    if (!post) {
      console.warn(`Post with id "${postID}" not found.`)
      return
    }

    post.comments.push({
      id: "c" + ++_commentIdCounter,
      text: text,
    })
  }

  const removeComment = (postID, commentID) => {
    const post = _posts.find((post) => post.id === postID)

    if (!post) {
      console.log(`Post with id "${postID}" not found.`)
      return
    }

    const initialLength = post.comments.length
    post.comments = post.comments.filter((comment) => comment.id !== commentID)

    if (post.comments.length === initialLength) {
      console.log(`Comment with id "${commentID}" not found in post "${postID}".`)
    }
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  }
}