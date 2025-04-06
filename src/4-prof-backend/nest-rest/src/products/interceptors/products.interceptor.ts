import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ProductsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Interceptor applied.');

    return next.handle()
      .pipe(
      catchError(err => throwError(() => new HttpException("Intercepted error", HttpStatus.CONFLICT)))
    );
  }
}
