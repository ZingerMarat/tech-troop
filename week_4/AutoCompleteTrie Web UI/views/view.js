export const getViewElements = () => {
  return {
    addInput: document.getElementById("add-input"),
    addButton: document.getElementById("add-button"),
    suggestInput: document.getElementById("suggestion-input"),
    suggestList: document.getElementById("suggestions-list"),
    wordCount: document.getElementById("word-count"),
  }
}

export const renderSuggestion = (suggestions) => {
  const list = document.getElementById("suggestions-list")
  list.innerHTML = ""

  suggestions.forEach((word) => {
    const li = document.createElement("li")
    li.textContent = word
    list.appendChild(li)
  })
}

export const updateWordCount = (count) => {
  document.getElementById("word-count").textContent = count
}

export const showTemporaryMessage = (status, word) => {
  const messageDiv = document.getElementById("message")
  messageDiv.className = "message"
  messageDiv.classList.add(status)

  let text = ""

  if (status === "ok") {
    text = `Added '${word}' to dictionary`
  } else if (status === "empty") {
    text = "Cannot add empty word"
  } else if (status === "exists") {
    text = `${word} allredy exists in dictionary`
  }

  messageDiv.textContent = text

  messageDiv.classList.add("show")

  setTimeout(() => {
    messageDiv.classList.remove("show")
  }, 2000)
}
