import { Router } from 'express'
import { userController } from '../controllers/userController'

export const userRouter = Router()

userRouter.post('/user/create', userController.create)
userRouter.delete('/user/remove/:id', userController.remove)
