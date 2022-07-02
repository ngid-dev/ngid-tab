import { dispatchNgidTab } from './actions/dispatch-ngid-tab';
import * as ngidTabActions from './actions/ngid-tab.action';
import { NgidTab } from './domain/ngid-tab';
export class NgidTabService {
  private state: NgidTab;
  public setState(): NgidTab {
    this.state = NgidTab.create();
    return this.state;
  }

  public dispatch(actions: ngidTabActions.AllTabActions): void {
    dispatchNgidTab(this.state, actions);
  }
}
