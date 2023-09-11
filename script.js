let words = []
await fetch("wordlist.txt").then(p => p.text()).then((text) => {
    console.log(text)
    words = text.replace("\r", "").split("\n")
})

let acceptableWords = []

newWord()
console.log("hi")
console.log(acceptableWords)
function newWord() {
    let wordStr = words[Math.floor(Math.random() * words.length)]
    acceptableWords = wordStr.split(", ")
    document.getElementById("audio").setAttribute("src", "audio/" + acceptableWords[0] + ".mp3")
    console.log("hi")
}

document.getElementById("input").addEventListener("keyup", (event) => {
    if (event.code !== "Enter") {
        return;
    }
    let messageText = document.getElementById("input").value.replace("'", "’")
    document.getElementById("input").value = ""
    let label = document.getElementById("label")
    if (acceptableWords.includes(messageText)) {
        label.classList = []
        label.innerText = "correct!"
    } else {
        label.classList = ["wrong"]
        label.innerText = "Incorrect! the words were " + acceptableWords.join(", ")
    }
    newWord()
});
