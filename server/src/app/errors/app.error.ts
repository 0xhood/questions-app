class AppError extends Error {
  public isOperational: boolean;
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export default AppError;
