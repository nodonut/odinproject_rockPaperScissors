function game() {
  for (i = 0; i < 5; i++) {
    function computerPlay() {
      let x = Math.floor(Math.random() * Math.floor(3));
      if (x == 0) {
        return 'rock';
      } else if (x == 1) {
        return 'paper';
      } else {
        return 'scissor';
      }
    }

    const playerSelection = prompt('Rock,paper or scissor?');
    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
      if (
        (playerSelection.toLowerCase() == 'rock' &&
          computerSelection.toLowerCase() == 'rock') ||
        (playerSelection.toLowerCase() == 'paper' &&
          computerSelection.toLowerCase() == 'paper') ||
        (playerSelection.toLowerCase() == 'scissor' &&
          computerSelection.toLowerCase() == 'scissor')
      ) {
        return 'TIE!';
      } else if (
        playerSelection.toLowerCase() == 'rock' &&
        computerSelection.toLowerCase() == 'paper'
      ) {
        return 'Sorry you lose! Paper beats rock.';
      } else if (
        playerSelection.toLowerCase() == 'rock' &&
        computerSelection.toLowerCase() == 'scissor'
      ) {
        return 'You win! Rock beats scissor!';
      } else if (
        playerSelection.toLowerCase() == 'paper' &&
        computerSelection.toLowerCase() == 'rock'
      ) {
        return 'You win! Paper beats rock!';
      } else if (
        playerSelection.toLowerCase() == 'paper' &&
        computerSelection.toLowerCase() == 'scissor'
      ) {
        return 'You lose! Scissor beats paper';
      } else if (
        playerSelection.toLowerCase() == 'scissor' &&
        computerSelection.toLowerCase() == 'rock'
      ) {
        return 'You lose! Rock beats scissor';
      } else if (
        playerSelection.toLowerCase() == 'scissor' &&
        computerSelection.toLowerCase() == 'paper'
      ) {
        return 'You win! Scissor beats paper';
      }
    }

    confirm(playRound(playerSelection, computerSelection));
  }
}

game();
