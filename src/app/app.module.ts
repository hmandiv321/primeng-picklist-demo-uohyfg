import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ProductService } from "./productservice";

import { PickListModule } from "primeng/picklist";

import { ButtonModule } from "primeng/button";
import { MessagesModule } from "primeng/messages";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PickListModule,
    HttpClientModule,
    FormsModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
