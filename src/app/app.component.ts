import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number

  car = {
    make: 'Honda',
    model: 'Accord',
    year: '1995',
  };

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.date = value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    this.amount = value;
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    this.height = value;
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    this.miles = value;
  }
}
