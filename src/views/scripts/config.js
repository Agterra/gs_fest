document.getElementById('new_player_button').addEventListener('click', (event) => {
    const newPlayerInput = document.getElementById('new_player_input')
})

document.addEventListener('keypress', async (event) => {
    const newPlayerInput = document.getElementById('new_player_input')
    if (event.key === "Enter") {
        await fetch('/config/api/add_player', {
            method: "POST",
            body: JSON.stringify({
                username: newPlayerInput.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
})