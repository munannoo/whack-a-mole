let m, score, counter, lastmole, timeUp
timeUp = false
counter = 0
let score_board = document.querySelector('h3#score')
let moles = document.querySelectorAll('.mole')
let start_btn = document.getElementById('start')

// get a random time
let rnd_time = () => {
  t = Math.floor(Math.random() * 1000) + 200
  return t
}

// get a random mole
let rnd_mole = () => {
  rnd = Math.floor(Math.random() * moles.length)
  let mole = moles[rnd]

  if ( lastmole === mole ) {
    rnd_mole()
  }

  lastmole = mole
  return mole
}

// for the random mole to pop up
let pop_up = () => {
  let mole = rnd_mole()
  let time = rnd_time()

  mole.classList.add('h')

  setTimeout(() => {
    mole.classList.remove('h')
    counter = counter + 1
    if (!timeUp) pop_up()
  }, time);
}

start_btn.addEventListener("click", () => {
  start_btn.innerText = 'start'
  timeUp = false
  score = 0
  score_board.innerText = 'score : 0'
  lastmole = 0
  counter = 0
  
  pop_up()
  setTimeout(() => {
    timeUp = true
    console.log('time is up my friends...')
    start_btn.innerText = 'again?'
  }, 15000)
})

moles.forEach(mole => mole.addEventListener('mousedown', () => {
  score = score + 1
  score_board.innerText = `score : ${score}`
  // console.log(score_board)
  // console.log('you hit the mole')
  mole.classList.remove('h')
}))