import express, {Request, Response, NextFunction, Express} from "express";
import {LoginUseCase} from "@/domain/login.use-case";
import {AuthRequest} from "@/controller/auth.types";
import {loginMiddleware} from "@/controller/auth.middlewares";

export class AuthRoutes {

    constructor(
        private app: Express
    ) {
    }

    init() {
        this.app.post(
            '/auth/login',
            [loginMiddleware],
            this.login
        )

        this.app.post(
            '/auth/logout',
            this.logout
        )
    }

    async login(req: AuthRequest, res: Response) {

        const useCase = new LoginUseCase();
        const result = await useCase.handle(
            req.body.username,
            req.body.password,
        )

        res
            .json(result)
    }

    async logout(req: Request, res: Response) {

    }
}
