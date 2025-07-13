import PromptSync from "prompt-sync"

const prompt = PromptSync()
let balance = 100
let flag = true

const menu = {
  1: function CheckBalance() {
    console.log(`Balance: $${balance}`)
  },
  2: function DepositMoney(money) {
    balance += money
    console.log(`New balance: $${balance}`)
  },
  3: function WithdrawMoney(money) {
    if (money > balance) {
      console.log("Not enough funds!")
      return
    }
    balance -= money
    console.log(`New balance: $${balance}`)
  },
  4: function Exit() {
    console.log("Goodbye!")
    flag = false
  },
}

while (flag) {
  console.log("\n=== Banking System ===")
  console.log("1) Check Balance")
  console.log("2) Deposit Money")
  console.log("3) Withdraw Money")
  console.log("4) Exit")

  const option = prompt("Choose option (1-4): ")

  switch (option) {
    case "1":
      menu[option]()
      break

    case "2": {
      const toDeposit = Number(prompt("Enter amount to deposit: "))
      if (isNaN(toDeposit) || toDeposit <= 0) {
        console.log("Invalid amount!")
        break
      }
      menu[option](toDeposit)
      break
    }

    case "3": {
      const toWithdraw = Number(prompt("Enter amount to withdraw: "))
      if (isNaN(toWithdraw) || toWithdraw <= 0) {
        console.log("Invalid amount!")
        break
      }
      menu[option](toWithdraw)
      break
    }

    case "4":
      menu[option]()
      break

    default:
      console.log("Invalid option. Try again.")
      break
  }
}
