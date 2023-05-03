import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrandComponent} from "./brand.component";
import {EditComponent} from "./edit/edit.component";


const routes: Routes = [
  {
    path: "",
    component: BrandComponent
  },
  {
    path: "edit/:id",
    component: EditComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
