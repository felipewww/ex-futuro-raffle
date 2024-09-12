import express, {NextFunction, Request, Response} from "express";
import {AuthRequest} from "@/controller/auth.types";

export function loginMiddleware(
    req: AuthRequest,
    res: Response,
    next: NextFunction
) {
    if (
        !req.body.username
        || req.body.username.length < 5
    ) {
        throw new Error(`Invalid username or password`);
    }

    next()
}
