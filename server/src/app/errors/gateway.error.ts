import { ErrorRequestHandler, Response } from 'express';
import AppError from './app.error';
import { EnvModesErrorDispatcher } from '../types/error';


const proErrors : EnvModesErrorDispatcher = (err, res) => {
	if (err) {
		// opeartional, trusted: send error to the client

		res.status(err.statusCode).json({
			status: "fail",
			message: err.message,
		});

		// programming or other errors: Don't leak error details
	} else {
		// log the error
		console.log(err);

		// 2) send geniric error
		res.status(500).json({
			status: "error",
			message: "internal server error.",
		});
	}
};

const testErrors: EnvModesErrorDispatcher = (err, res) => {
	res.status(err.statusCode).json({
		message: err.message,
		stack: err.stack,
		err,
	});
};

const devErrors: EnvModesErrorDispatcher = (err, res) => {
	res.status(err.statusCode).json({
		message: err.message,
		stack: err.stack,
		err,
	});
};

const ErrorsGateway : ErrorRequestHandler = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;

	err.status = err.status || "error";

	if (req.app.get("env") === "development") {
		devErrors(err, res);
	} else if (req.app.get("env") === "testing") {
		//
		res.send("ahm")
	} else {
		proErrors(err, res);
	}
};


export default ErrorsGateway
