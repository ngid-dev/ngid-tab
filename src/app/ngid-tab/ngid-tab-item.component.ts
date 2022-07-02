import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import * as ngidTabAction from './actions/ngid-tab.action';
import { NgidTabItemModel } from './model/ngid-tab-item.model';
import { NgidTabService } from './ngid-tab.service';
@Component({
  selector: 'ngid-tab-item',
  templateUrl: './ngid-tab-item.component.html',
  animations: [
    trigger('transitionItem', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void => *', animate(250)),
    ]),
  ],
})
export class NgidTabItemComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() header: string;
  @Input() isActive: boolean;
  @Input() isHidden: boolean;
  @Input() isDisabled: boolean;

  @ContentChild('headerLeft') headerLeftTmpl: TemplateRef<any>;
  @ContentChild('headerRight') headerRightTmpl: TemplateRef<any>;
  @ContentChild('header') headerTmpl: TemplateRef<any>;

  public ngidTabItem: NgidTabItemModel;

  constructor(private ngidTab: NgidTabService) {}

  ngOnInit(): void {
    this.setTabItemState();
    this.addTabItemToTabState();
  }

  ngAfterViewInit(): void {
    this.setTabItemTemplateRef();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isDisabled = changes.isDisabled;
    const isHidden = changes.isHidden;
    if (this.ngidTabItem) {
      if (isDisabled && isDisabled.currentValue !== isDisabled.previousValue) {
        this.ngidTab.dispatch(
          new ngidTabAction.SetDisabledNgidTabItem({
            tabItem: this.ngidTabItem,
            isDisabled: this.isDisabled,
          })
        );
      }

      if (isHidden && isHidden.currentValue !== isHidden.previousValue) {
        this.ngidTab.dispatch(
          new ngidTabAction.SetHiddenNgidTabItem({
            tabItem: this.ngidTabItem,
            isHidden: this.isHidden,
          })
        );
      }
    }
  }

  private setTabItemState(): void {
    const id = Date.now().toString();
    this.ngidTabItem = new NgidTabItemModel(
      id,
      this.header,
      this.isActive,
      this.isHidden,
      this.isDisabled
    );
  }

  private setTabItemTemplateRef(): void {
    this.ngidTabItem.headerTmpl = this.headerTmpl;
    this.ngidTabItem.headerLeftTmpl = this.headerLeftTmpl;
    this.ngidTabItem.headerRightTmpl = this.headerRightTmpl;
  }

  private addTabItemToTabState(): void {
    this.ngidTab.dispatch(
      new ngidTabAction.AddTabItem({ tabItem: this.ngidTabItem })
    );
  }
}
