import { NgidTab } from '../domain/ngid-tab';
import { NgidTabItemModel } from '../model/ngid-tab-item.model';
export const addNgidTabItemAction = (
  state: NgidTab,
  payload: { tabItem: NgidTabItemModel }
) => {
  state.tabs.push(payload.tabItem);
};
