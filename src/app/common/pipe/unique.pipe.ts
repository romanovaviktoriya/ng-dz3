import { Pipe, PipeTransform } from '@angular/core';
import { IWidget } from './../mock/data';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(widget: any, key: any): any {
    const types  = widget.map((dataItem: IWidget) => {
      const type = dataItem[key].split('');
      return type[0].toUpperCase() + type.splice(1).join('');
    });
    return types.filter((value, index, arr) => arr.indexOf(value) === index);
  }

}
