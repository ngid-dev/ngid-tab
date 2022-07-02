import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgidTabModule } from './ngid-tab/ngid-tab.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgidTabModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
