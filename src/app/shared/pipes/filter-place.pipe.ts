import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPlacePipe implements PipeTransform {

  transform(place, search: string = '', field: string = 'title'): string[] {
    if(!search.trim()){
      return [];
    }

    return place.filter( plc => {
      return plc[field].toLowerCase().includes(search.toLowerCase());
    }) ;

  }

}
