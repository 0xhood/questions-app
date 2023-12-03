import { NextFunction, Response, Request, RequestHandler } from "express";
import AppError from "../errors/app.error";

export type ErrorsWrapperRequestHandlerParam = (
	fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => RequestHandler;

export type EnvModesErrorDispatcher = (err: AppError, res: Response) => void;
