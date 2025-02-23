window.playerList = []
window.tournamentName = document.getElementById("tournament_name_input").value

document.getElementById("tournament_name_input").addEventListener("keypress", (event) => {
    tournamentName = event.target.value
})

document.getElementById("player_input").addEventListener("paste", (event) => {
    event.preventDefault()
    const players = event.clipboardData.getData("text").split('\n').filter(e => e.length > 0)
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