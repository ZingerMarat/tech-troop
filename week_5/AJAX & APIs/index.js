//exercise_1

// const getByISBN = (isbn) =>{
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, (data) => {
//         console.log(data.items[0].volumeInfo.title);

//     })
// }

// getByISBN('1440633908')

//exercise_2
// const getBook = (queryType, queryValue) => {
//   if (queryType === "isbn") {
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`, (data) => {
//       console.log(data.items[0].volumeInfo.title)
//     })
//   } else if (queryType === "title"){
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${queryValue}`, (data) => {
//       console.log('book by ', data.items[0].volumeInfo.authors[0])
//     })
//   }
// }

// getBook("title", "How to Win Friends and Influence People")

//exercise_3
// const getBook = (queryType, queryValue) => {
//   if (queryType === "isbn") {
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`, (data) => {
//         data.items.forEach(book => {
//             console.log(`title: ${book.volumeInfo.title}, author: ${book.volumeInfo.authors[0]}, isbn: ${book.volumeInfo.industryIdentifiers[1].identifier}`)
//         })
//     })
//   } else if (queryType === "title"){
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${queryValue}`, (data) => {
//       console.log('book by ', data.items[0].volumeInfo.authors[0])
//     })
//   }
// }

// getBook("isbn", "0439023521")

//vOH7l2hfdGGYskhSxz1ImO2WpgdNrg3E

//javascript, jQuery

const getGIF = (value) => {
  $.get(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=vOH7l2hfdGGYskhSxz1ImO2WpgdNrg3E&limit=5`, (data) => {
    console.log("success got data", data.data[0])

    $("<iframe>", {
      src: data.data[0].embed_url,
      width: 600,
      height: 400,
      frameborder: 0,
      allowfullscreen: true,
    }).appendTo("#gif-container")
  })
}

document.getElementById("btn").addEventListener("click", () => {
  const value = document.getElementById("inp").value
  getGIF(value)
})
