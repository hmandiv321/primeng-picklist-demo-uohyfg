import { Component } from "@angular/core";
import { ProductService } from "./productservice";
import { Product } from "./product";
import { PrimeNGConfig } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { Message } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [ConfirmationService]
})
export class AppComponent {
  sourceProducts: Product[];

  targetProducts: Product[];

  msgs: Message[] = [];

  position: string;

  constructor(
    private confirmationService: ConfirmationService,
    private carService: ProductService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.carService
      .getProductsSmall()
      .then(products => (this.sourceProducts = products));
    this.targetProducts = [];
    this.primengConfig.ripple = true;
  }

  public foo() {
    alert(JSON.stringify(this.targetProducts.map(val => val.name)));
  }

  confirm1() {
    this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.msgs = [
          {
            severity: "info",
            summary: "Confirmed",
            detail: `You have accepted ${JSON.stringify(this.targetProducts.map(val => val.name))}`
          }
        ];
      },
      reject: () => {
        this.msgs = [
          { severity: "info", summary: "Rejected", detail: "You have rejected" }
        ];
      }
    });
  }
}
