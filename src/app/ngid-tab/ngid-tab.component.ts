import { Component, Input, OnInit } from '@angular/core';
import * as ngidTabAction from './actions/ngid-tab.action';
import { NgidTab } from './domain/ngid-tab';
import { NgidTabItemModel } from './model/ngid-tab-item.model';
import { NgidTabService } from './ngid-tab.service';
@Component({
  selector: 'ngid-tab',
  templateUrl: './ngid-tab.component.html',
  providers: [NgidTabService],
})
export class NgidTabComponent implements OnInit {
  @Input() isVertical: boolean;

  public state: NgidTab;

  constructor(private ngidTab: NgidTabService) {}

  ngOnInit(): void {
    this.setInitializationState();
  }

  private setInitializationState(): void {
    this.state = this.ngidTab.setState();
  }

  public handleSetActiveNgidTabItem(
    event: MouseEvent,
    ngidTabItem: NgidTabItemModel
  ): void {
    event.preventDefault();
    this.ngidTab.dispatch(
      new ngidTabAction.SetActiveNgidTabItem({
        tabItem: ngidTabItem,
      })
    );
  }
}
