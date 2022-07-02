import { NgidTabItemModel } from '../model/ngid-tab-item.model';
export const setHiddenNgidTabItemAction = (payload: {
  tabItem: NgidTabItemModel;
  isHidden: boolean;
}): void => {
  payload.tabItem.isHidden = payload.isHidden;
};
