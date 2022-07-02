import { NgidTab } from '../domain/ngid-tab';
import { NgidTabItemModel } from '../model/ngid-tab-item.model';

export const setActiveNgidTabItemAction = (
  state: NgidTab,
  payload: { tabItem: NgidTabItemModel }
): void => {
  if (!payload.tabItem.isDisabled) {
    state.tabs.forEach((tabItem: NgidTabItemModel) => {
      tabItem.isActive = false;
    });
    payload.tabItem.isActive = true;
  }
};
