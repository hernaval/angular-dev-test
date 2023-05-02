import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "subscription",
    loadChildren: () => import("./subscription/subscription.module").then(mo => mo.SubscriptionModule)
  },
  {
    path: "brand",
    loadChildren: () => import("./brand/brand.module").then(mo => mo.BrandModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
