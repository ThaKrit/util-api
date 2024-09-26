import { Controller, Get, Param } from '@nestjs/common';
import { mobileFormat } from './format.fn';

@Controller('format')
export class FormatController {
  @Get('mobile-no/:mobileNo')
  getMobileFormat(@Param() param: { mobileno: string }): string {
    return mobileFormat(param.mobileno);
  }
}
