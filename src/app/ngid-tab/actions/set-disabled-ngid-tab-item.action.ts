import { NgidTabItemModel } from '../model/ngid-tab-item.model';

export const setDisabledNgidTabItemAction = (payload: {
  tabItem: NgidTabItemModel;
  isDisabled: boolean;
}): void => {
  payload.tabItem.isDisabled = payload.isDisabled;
};
