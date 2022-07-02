import { IAction } from '../interface/action';
import { NgidTabItemModel } from '../model/ngid-tab-item.model';

export const ADD_NGID_TAB_ITEM = `[ Ngid Tab ]: Add ngid tab item to tab state`;
export const SET_ACTIVE_NGID_TAB_ITEM = `[ Ngid Tab ]: Set active ngid tab item`;
export const SET_DISABLED_NGID_TAB_ITEM = `[ Ngid Tab ]: Set disabled ngid tab item`;
export const SET_HIDDEN_NGID_TAB_ITEM = `[ Ngid Tab ]: Set hidden ngid tab item`;

export class AddTabItem implements IAction<{ tabItem: NgidTabItemModel }> {
  public readonly type = ADD_NGID_TAB_ITEM;
  constructor(public payload: { tabItem: NgidTabItemModel }) {}
}

export class SetActiveNgidTabItem
  implements IAction<{ tabItem: NgidTabItemModel }>
{
  public readonly type = SET_ACTIVE_NGID_TAB_ITEM;
  constructor(public payload: { tabItem: NgidTabItemModel }) {}
}

export class SetDisabledNgidTabItem
  implements IAction<{ tabItem: NgidTabItemModel; isDisabled: boolean }>
{
  public readonly type = SET_DISABLED_NGID_TAB_ITEM;
  constructor(
    public payload: { tabItem: NgidTabItemModel; isDisabled: boolean }
  ) {}
}

export class SetHiddenNgidTabItem
  implements IAction<{ tabItem: NgidTabItemModel; isHidden: boolean }>
{
  public readonly type = SET_HIDDEN_NGID_TAB_ITEM;
  constructor(
    public payload: { tabItem: NgidTabItemModel; isHidden: boolean }
  ) {}
}

export type AllTabActions =
  | AddTabItem
  | SetActiveNgidTabItem
  | SetDisabledNgidTabItem
  | SetHiddenNgidTabItem;
