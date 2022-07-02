import { NgidTabItemModel } from '../model/ngid-tab-item.model';
export class NgidTab {
  public tabs: Array<NgidTabItemModel>;
  constructor() {
    this.tabs = new Array();
  }

  public static create(): NgidTab {
    const state = new NgidTab();

    return state;
  }
}
