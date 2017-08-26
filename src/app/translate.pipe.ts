import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, lang = 'en-tw'): any {

    switch (lang) {
      case 'en-tw':
        value = value.replace('IT', '資訊科技(IT)');
        value = value.replace('MVP', '最有價值專家(MVP)');
        break;

      case 'tw-en':
        value = value.replace('資訊科技(IT)', 'IT');
        value = value.replace('最有價值專家(MVP)', 'MVP');
        break;

      default:
        break;
    }


    return value;
  }

}
