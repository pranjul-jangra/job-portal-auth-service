import { Request, Response, NextFunction, RequestHandler } from "express";
import ErrorHandler from "./errorHandler.js";

// Outer function expression
export const TryCatch = (
    controller: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler =>

    // Inner function expression
    async (req, res, next) => {
        try {
            await controller(req, res, next);

        } catch (error: unknown) {
            if (error instanceof ErrorHandler) {
                return res.status(error.statusCode).json({ message: error.message });
            }

            if (error instanceof Error){
                res.status(500).json({ message: error.message });
            }

            res.status(500).json({ message: "Internal Server Error" })
        }
    }
