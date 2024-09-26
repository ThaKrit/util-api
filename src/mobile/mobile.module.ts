/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FormatService } from './format.service';

@Module({
  providers: [FormatService]
})
export class MobileModule {}
