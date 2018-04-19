import { Pipe, PipeTransform } from '@angular/core';
/*
 * Properly format the amount of the bill
 * 
 * Usage:
 *   value | price
 * Example:
 *   {{ 2764 | price }}
 *   formats to: 27.64
*/
@Pipe({name: 'price'})
export class PricePipe implements PipeTransform {

  transform(value: number): number {   
    return parseFloat((value / 100).toFixed(2));
  }

}