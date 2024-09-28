import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CommaSplitPipe implements PipeTransform {
  transform(value: string) {
    return value.split(',');
  }
}
