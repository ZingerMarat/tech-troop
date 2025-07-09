//Exercise 1
// const StringFormatter = () => {
//     const capitalizeFirst = (text) => {
//         return text[0].toUpperCase() + text.slice(1)
//     }

//     const toSkewerCase = (text) => {
//         return text.replace(' ', '-')
//     }

//     return {capitalizeFirst, toSkewerCase}
// }
// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
// console.log(formatter.toSkewerCase("blue box")) //should return blue-box



//Exercise 2
// const Bank = () => {
//     let _money = 500;

//     const depositCashe = (deposit) => {
//         _money += deposit
//     }

//     const checkBalance = () => {
//         console.log(_money)
//     }

//     return {deposit: depositCashe, showBalance: checkBalance}
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950



//Exercise 3
const SongsManager = () => {
    const _songs = {}

    const _urlPattern = 'https://www.youtube.com/watch?v='

    const addSong = (newSong, newUrl) => {
        _songs[newSong] = newUrl.slice(_urlPattern.length)
    }

    const getSong = (song) => {
        return _urlPattern + _songs[song]
    }


    return {addSong, getSong}
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax") ); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
