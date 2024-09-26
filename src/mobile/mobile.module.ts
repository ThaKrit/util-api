/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FormatService } from './format.service';
import { MobileController } from './mobile.controller';

@Module({
  providers: [FormatService],
  controllers: [MobileController]
})
export class MobileModule {}
