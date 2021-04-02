import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css']
})

export class CustomListComponent {
  showEmptyMessage: Boolean = false;
  showOverflowMessage: Boolean = false;
  listHeaders: string[] = ['Car Name', 'Index', 'Even', 'Odd'];
  carNames = ['BMW', 'Nissan', 'Mercedes-Benz', 'Toyota', 'Honda', 'Hyundai', 'Kia']
  @ViewChild('carInput') carInput: ElementRef;

  addCar() {
    if(this.carInput.nativeElement.value !== '' && this.carNames.length <= 10) {
      this.carNames.push(this.carInput.nativeElement.value);
    } else {
      return;
    }
    if (this.carNames.length > 10) {
      this.showOverflowMessage = true;
    }
    this.showEmptyMessage = false;
  }

  removeLastCar() {
    this.carNames.pop();
    if (this.carNames.length === 0) {
      this.showEmptyMessage = true;
    }
    this.showOverflowMessage = false;
  }

  removeFirstCar() {
    this.carNames.shift();
    if (this.carNames.length === 0) {
      this.showEmptyMessage = true;
    }
    this.showOverflowMessage = false;
  }


}