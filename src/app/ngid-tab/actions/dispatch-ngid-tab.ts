import { NgidTab } from '../domain/ngid-tab';
import { addNgidTabItemAction } from './add-ngid-tab-item.action';
import * as ngidTabAction from './ngid-tab.action';
import { setActiveNgidTabItemAction } from './set-active-ngid-tab-item.action';
import { setDisabledNgidTabItemAction } from './set-disabled-ngid-tab-item.action';
import { setHiddenNgidTabItemAction } from './set-hidden-ngid-tab-item.action';
export const dispatchNgidTab = (
  state: NgidTab,
  action: ngidTabAction.AllTabActions
): void => {
  switch (action.type) {
    case ngidTabAction.ADD_NGID_TAB_ITEM:
      addNgidTabItemAction(state, action.payload);
      break;
    case ngidTabAction.SET_ACTIVE_NGID_TAB_ITEM:
      setActiveNgidTabItemAction(state, action.payload);
      break;
    case ngidTabAction.SET_DISABLED_NGID_TAB_ITEM:
      setDisabledNgidTabItemAction(action.payload);
      break;
    case ngidTabAction.SET_HIDDEN_NGID_TAB_ITEM:
      setHiddenNgidTabItemAction(action.payload);
      break;
    default:
      break;
  }
};
