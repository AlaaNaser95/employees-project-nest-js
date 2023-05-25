import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

//this pipe will convert any empty string or null to undefined
@Injectable()
export class ConvertToUndefinedPipe implements PipeTransform {
  private payload;
  transform(body: any, metadata: ArgumentMetadata): any {
    if (metadata.type == 'body') {
      this.payload = { ...body };
      this.convertToUndefined(this.payload);
      return this.payload;
    }
    return body;
  }

  convertToUndefined(body) {
    for (let [key, value] of Object.entries(body)) {
      if (typeof value === 'string') {
        body[key] = value.trim();
        value = value.trim();
      }
      if (
        value === '' ||
        value === null ||
        value === 'null' ||
        value === 'undefined'
      ) {
        body[key] = undefined;
      } else {
        if (typeof body[key] == 'object') this.convertToUndefined(body[key]);
      }
    }
  }
}
