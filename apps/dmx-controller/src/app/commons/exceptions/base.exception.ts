import { HttpException } from '@nestjs/common';

export class BaseException<T = any> extends HttpException {
  constructor(
    response: string | Record<string, T>,
    status: number,
  ) {
    super(response, status);
  }
}