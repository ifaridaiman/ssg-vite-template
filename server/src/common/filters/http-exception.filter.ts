import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiErrorResponse } from '../types/api-response';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse: ApiErrorResponse = {
      success: false,
      error: {
        code: `HTTP_${status}`,
        message:
          exception instanceof HttpException
            ? this.extractMessage(exception)
            : 'Internal server error',
        details:
          exception instanceof HttpException
            ? exception.getResponse()
            : undefined,
      },
    };

    response.status(status).json(errorResponse);
  }

  private extractMessage(exception: HttpException): string {
    const res = exception.getResponse();

    if (typeof res === 'string') return res;
    if (typeof res === 'object' && 'message' in res) {
      const message = (res as { message?: string | string[] }).message;
      return Array.isArray(message) ? message.join(', ') : (message ?? 'Error');
    }

    return 'Error';
  }
}
