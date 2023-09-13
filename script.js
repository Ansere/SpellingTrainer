let words = []
let total = 0;
let correct = 0;
let streak = 0;
await fetch("wordlist.txt").then(p => p.text()).then((text) => {
    console.log(text)
    words = text.replace("\r", "").split("\n")
})

let acceptableWords = []

newWord()
function newWord() {
    let wordStr = words[Math.floor(Math.random() * words.length)]
    acceptableWords = wordStr.replace("\r","").split(", ")
    document.getElementById("audio").setAttribute("src", "audio/" + acceptableWords[0] + ".mp3")
    console.log("hi")
}

document.getElementById("input").addEventListener("keyup", (event) => {
    if (event.key !== "Enter") {
        return;
    }
    total += 1;
    let messageText = document.getElementById("input").value.replace("'", "’")
    document.getElementById("input").value = ""
    console.log(messageText)
    console.log(acceptableWords)
    let label = document.getElementById("label")
    if (acceptableWords.includes(messageText)) {
        label.classList = []
        label.innerText = "correct!"
        correct += 1;
        streak += 1;
    } else {
        label.classList = ["wrong"]
        label.innerText = "Incorrect! the words were " + acceptableWords.join(", ")
        streak = 0;
    }
    updateLabel()
    newWord()
});

function updateLabel() {
    let scoreLabel = document.getElementById("score")
    scoreLabel.innerText = "Score: " + correct + "/" + total + ", " + (correct * 100 / total).toFixed(2) + "%"
    let streakLabel = document.getElementById("streak")
    streakLabel.innerText = "Streak: " + streak
}
