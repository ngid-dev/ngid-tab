import { TemplateRef } from '@angular/core';

export class NgidTabItemModel {
  public headerTmpl: TemplateRef<any>;
  public headerLeftTmpl: TemplateRef<any>;
  public headerRightTmpl: TemplateRef<any>;
  constructor(
    public id: string,
    public header: string,
    public isActive: boolean,
    public isHidden: boolean,
    public isDisabled: boolean
  ) {}
}
