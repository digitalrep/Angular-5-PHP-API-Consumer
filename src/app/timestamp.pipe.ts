import { Pipe, PipeTransform } from '@angular/core';
/*
 * Properly format the bill's date
 * 
 * Usage:
 *   value | timestamp
 * Example:
 *   {{ 1525502122 | timestamp }}
 *   formats to: ?
*/
@Pipe({name: 'timestamp'})
export class TimestampPipe implements PipeTransform {

  transform(timestamp: number): string {  
      let date = new Date(timestamp * 1000);
      return date.toISOString();
  }

}