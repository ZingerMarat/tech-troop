// exercise_1
const getUserByID = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if (!response.ok) {
      throw new Error("User not found")
    }

    const user = await response.json()

    console.log(`Found user: ${user.name} (${user.email})`)

    return user
  } catch {
    console.error("Error fetching user:", error.message)
    return null
  }
}

//getUserByID(1).then((user) => console.log(user))

//exercise_3
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data

  const [userRes, postsRes] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userId}`), fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)])

  const [user, posts] = await Promise.all([userRes.json(), postsRes.json()])

  user.posts = posts

  return user
}

//getUserWithPosts(1).then((user) => console.log(user))

//exercise_3
const getDasboardData = async () => {
  const [usersRes, postsRes, commentsRes] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users"), fetch("https://jsonplaceholder.typicode.com/posts"), fetch("https://jsonplaceholder.typicode.com/comments")])

  const [users, posts, comments] = await Promise.all([usersRes.json(), postsRes.json(), commentsRes.json()])

  const totalUsers = users.length
  const totalPosts = posts.length
  const totalComments = comments.length

  const summary = {
    totalUsers,
    totalPosts,
    totalComments,
    avgPostPerUser: totalPosts / totalUsers,
    avgCommentPerPost: totalComments / totalPosts
  }


  let topUsers = []

  for (let user of users){
    const postsOfUser = (await getUserWithPosts(user.id)).posts.map(post => post.id)
    const postCount = postsOfUser.length
    const commentCount = comments.filter(comment => postsOfUser.includes(comment.postId)).length
    topUsers.push({name: user.name, postCount, commentCount})
  }

  topUsers = topUsers.sort((a, b) => b.postCount - a.postCount).slice(0,3)

  const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0,5)

  return {
    summary,
    topUsers,
    recentPosts
  }
}

getDasboardData().then(data => console.log(data))
