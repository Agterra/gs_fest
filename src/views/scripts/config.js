const newPlayerButton = document.getElementById('new_player_button')
const newPlayerInput = document.getElementById('new_player_input')

newPlayerButton.addEventListener('click', (event) => {
    console.log(newPlayerInput.value)
})