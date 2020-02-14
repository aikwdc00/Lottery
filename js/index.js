// DATA /////////////////////////////////////
console.clear()
let lotterybox = document.querySelector('.lotterypanel')
let button = document.querySelectorAll('.btn')
let inputList = document.querySelectorAll('input')
const rewards = []
const ticketBox = []
console.log(ticketBox)
// console.log(button)
// console.log(inputList)
let players = [
    { name: 'Bernard', email: 'bernard@example.com' },
    { name: 'Youchi', email: 'youchi@example.com' },
    { name: 'Yenting', email: 'yenting@example.com' },
    { name: 'Angela', email: 'angela@example.com' },
    { name: 'Yvonne', email: 'yvonne@example.com' },
    { name: 'Ellen', email: 'ellen@example.com' },
    { name: 'Walter', email: 'walter@example.com' },
    { name: 'Kevin', email: 'kevin@example.com' },
    { name: 'Tim', email: 'tim@example.com' },
    { name: 'Russell', email: 'russell@example.com' }
]

// FUNCTIONS /////////////////////////////////////
// create random
function randomusefloor(max) {
    return Math.floor(Math.random() * max);
}

function drawWinner(players) {
    let winner = players.splice(randomusefloor(players.length), 1)[0]
    // console.log(winner)
    // return announceMsg(winner,prize)

    inputList[0].value = winner.number
    inputList[1].value = encodeName(winner.name)
    inputList[2].value = encodeEmail(winner.email)
    inputList[3].value = reward()
    // console.log(inputList[0])
}

// function announceMsg (winner, prize) {
//   console.log(`${winner.number} | ${encodeName(winner.name)} | ${encodeEmail(winner.email)} | ${prize}`)
// }

//  create lottery number
function getlotteryNumber() {
    let tick = ''
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1232139'

    for (i = 0; i < 2; i++) { 	// 設置 前兩位數英文 random
        //  tick += letter.charAt(Math.floor(Math.random() * letter.length)) 也可用這種寫法
        tick += letter[randomusefloor(26)]
    }

    for (i = 0; i < 4; i++) {		// 設置 數字 random
        tick += randomusefloor(10)
    }

    if (ticketBox.includes(tick)) {
        getlotteryNumber()
    } else {
        ticketBox.push(tick)
    }

    return tick
}

for (let player of players) {
    player.number = getlotteryNumber()
}

function encodeName(name) { // 加密name 
    return name.slice(0, 2) + '*'.repeat(name.length - 2)
}

function encodeEmail(email) { // 加密email
    let split, show
    split = email.split('@')　	// 將字串分割
    // console.log(split)
    show = email.slice(0, split[0].length / 2) + '...@' + split[1]
    return show
}

// each player gets a lottery ticket
// function getannounceparticipationMsg() {
// 	for (let i of players) {
// 		announceMsg (i, '參加獎')
// 	}
// }// players.map(player => announceMsg(player, '參加獎')) 可使用map替代

// draw 3 winners and announce the results

// drawWinner(players, '貮獎')
// drawWinner(players, '叁獎')

// the rest of players get participation award
// getannounceparticipationMsg()

function reward() {
    const reward = ["頭獎", "二獎", "三獎"]
    let good = reward[randomusefloor(3)]

    if (rewards.includes(good)) {
        // console.log("參加獎")
        good = "參加獎"
    } else {
        rewards.push(good)
        console.log(rewards)
    }
    return good
}

// lotterybox.innerHTML = `${players[0].number}`

function sumbitdata() {
    drawWinner(players)
}

function cleardata() {
    let input = document.querySelectorAll('input')
    for (let i = 0; i < input.length; i++) {
        input[i].value = ''
    }
}

button[1].addEventListener('click', cleardata)
button[0].addEventListener('click', sumbitdata)