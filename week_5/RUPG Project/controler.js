import { Renderer } from "./render.js";
import { UserModel } from "./model.js";

const render = Renderer()
const userModel = UserModel()


document.getElementById('gen-btn').addEventListener('click', async () => {
    await Promise.all([userModel.loadUserInfo()])
    render.renderUser(userModel.getUser())
})
