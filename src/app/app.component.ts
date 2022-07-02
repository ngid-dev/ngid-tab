import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ngid-tab';
  public disabledItem: number;
  public hiddenItem: number;
  constructor() {
    this.disabledItem = 2;
    this.hiddenItem = 3;
  }

  public handleSetDisabled(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.disabledItem = +inputElement.value;
  }

  public handleSetHidden(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.hiddenItem = +inputElement.value;
  }
}
