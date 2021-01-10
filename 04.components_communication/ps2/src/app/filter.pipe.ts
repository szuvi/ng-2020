import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "./app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<Person>, selectedFramework: string): Array<Person> {
    if (selectedFramework === 'all') {
      return values;
    }

    return values.filter((person) => {
      return person.framework.toLocaleLowerCase() === selectedFramework.toLocaleLowerCase();
    });
  }

}
