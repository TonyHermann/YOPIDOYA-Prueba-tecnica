import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highest-occurrence',
  templateUrl: './highest-occurrence.component.html',
  styleUrls: ['./highest-occurrence.component.scss'],
})
export class HighestOccurrenceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let highestOccurrence = function (
      input: Array<string | number>
    ): Array<string | number> {

      let occurrences: any = {};

      for (const element of input) {
        let d = element;
        if (occurrences[d]) {
          occurrences[d] += 1;
        } else {
          occurrences[d] = 1;
        }
      }

      //Check higher
      let higher: any = 1;
      let highestOccurrence: Array<string | number> = [];

      for (const item in occurrences) {
        if (occurrences[item] > higher) {
          if (parseInt(item)) {
            highestOccurrence = [parseInt(item)];
          } else {
            highestOccurrence = [item];
          }

          higher = occurrences[item];
        } else if (occurrences[item] == higher) {
          console.log(highestOccurrence);
          if (parseInt(item)) {
            highestOccurrence.push(parseInt(item));
          } else {
            highestOccurrence.push(item);
          }
        }
      }

      return highestOccurrence;
    };

    this.verificar(highestOccurrence, [2, 3, 2, 2, 2, 4, 2], [2]);

    this.verificar(highestOccurrence, [2, 3, 2, 3, 2, 3, 4], [2, 3]);

    this.verificar(highestOccurrence, ['a', 'b', 'c', 'a', 'a', 'a', 'a'], ['a']);

    this.verificar(highestOccurrence, ['a', 'a', 2, 2, 2, 'a', 4], ['a', 2]);
  }

  verificar(
    callback: Function,
    parameters: any,
    expected: Array<string | number>
  ): any {
    let returned = callback(parameters);

    if (this.arrayEquals(returned, expected) || this.arrayEquals(returned.reverse(), expected)) {
      console.log(expected);
      console.log('✅');
      return true;
    } else {
      console.log(returned);
      console.log(expected);
      console.log('❌');
      return false;
    }
  }

  arrayEquals(a: Array<string | number>, b: Array<string | number>) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  }
}
