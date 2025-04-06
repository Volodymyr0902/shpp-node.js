import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import {Request, Response} from 'express';

@Catch()
export class ProductsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus()
      response.status(status).json({error: "HTTP Error happened"});
    } else {
      response.status(404).json({error: "Not Found"});
    }

  }
}
