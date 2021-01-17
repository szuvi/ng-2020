import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "./app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: Array<Person>, framework: string = 'all', count): Array<Person> {
    if (framework === 'all') {
      return values;
    }
    return values.filter((person) => {
      return person.framework === framework;
    });
  }

}
