import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const userInfo = {
    name: '',
    email: '',
    age: '',
    favoriteColor: '',
}

rl.question("Name: ", (name) => {
    rl.question("Email: ", (email) => {
         rl.question("Age: ", (age) => {
             rl.question("Favorite Color: ", (favoriteColor) => {
                userInfo.name = name
                userInfo.email = email
                userInfo.age = age
                userInfo.favoriteColor = favoriteColor

                console.log(`\nRegistration Summary:`)
                console.log(`Name: ${userInfo.name}`)
                console.log(`Email: ${userInfo.email}`)
                console.log(`Age: ${userInfo.age}`)
                console.log(`Favorite Color: ${userInfo.favoriteColor}`)

                rl.close()
             })
            })
        })
    })