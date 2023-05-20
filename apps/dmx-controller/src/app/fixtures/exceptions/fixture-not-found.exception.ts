import { HttpStatus } from "@nestjs/common";
import { BaseException } from "../../commons/exceptions/base.exception";

export class FixtureNotFoundException extends BaseException {
  constructor() {
    const body = BaseException.createBody(
      'Fixture not found',
      'Not Found',
      HttpStatus.NOT_FOUND,
    );
    super(body, HttpStatus.NOT_FOUND);
  }
}