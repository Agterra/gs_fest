let playerList = []

document.getElementById("player_input").addEventListener("paste", (event) => {
    event.preventDefault()
    const players = event.clipboardData.getData("text").split('\n')
    playerList = players
    displayPlayerList()
})

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const playerInput = document.getElementById("player_input")
        const playerName = playerInput.value
        if (playerName.length === 0) {
            return
        }
        playerInput.value = ""
        playerList.push(playerName)
        displayPlayerList()
    }
})

function playerListUpdate(event) {
    console.log(event.target.value.split("\n"))
}

function displayPlayerList() {
    const playerListElement = document.getElementById("player_list")
    playerListElement.innerHTML = ""
    for (let player of playerList) {
        playerListElement.innerHTML += "<p>" + player + "</p>"
    }
}