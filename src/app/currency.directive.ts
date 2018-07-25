
import { Directive } from '@angular/core';

@Directive({
  selector: '[currency]',
  host: {
    '(input)': 'format($event)',
    '(blur)': 'format2($event)'
  }
})
export class CurrencyDirective {


  constructor() {

  }


  format(event) {
    let money = event.target.value ? event.target.value.replace(/[^\d||.]/g, '') : '';
    let arrayMoney = money.split('.');

    let moneyMask = arrayMoney[0].toString().replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });

    let decimal = arrayMoney.length == 1 ? moneyMask : moneyMask + '.' + arrayMoney[1].substring(0, 2);
    event.target.value = decimal;
  }

  format2(event) {
    let arrayMoney = event.target.value.split('.');
    let test = arrayMoney[1] + '00';
    let decimal = arrayMoney.length == 1 ? '00' : test.substring(0, 2);
    event.target.value = arrayMoney[0] + '.' + decimal;
  }


}
