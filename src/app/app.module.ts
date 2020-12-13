import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AddAlimentComponent } from './add-aliment/add-aliment.component';
import { ListAlimentComponent } from './list-aliment/list-aliment.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AddAlimentComponent, ListAlimentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
