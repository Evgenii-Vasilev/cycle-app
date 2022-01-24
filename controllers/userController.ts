import { Request, Response } from 'express'
import { UserModel } from '../models/UserModel'

class User {
    async create(req: Request, res: Response) {
        const { login, password } = req.body
        const newUser = await UserModel.query().insert({ login, password })

        res.json(newUser)
    }

    async remove(req: Request, res: Response) {
        const id = +req.params.id
        await UserModel.query().deleteById(id)

        res.json({
            message: `Пользователь с id${id} удалён`,
        })
    }
}

export const userController = new User()
