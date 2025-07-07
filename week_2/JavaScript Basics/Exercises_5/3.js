const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for (postIndex in posts){
  if (posts[postIndex].id === 2){
    posts.splice(postIndex, 1)
  }
}

console.log(posts);
