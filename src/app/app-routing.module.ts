import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

export const routes: Routes = [
  {
    path: 'item',
    component: ItemComponent,
    data: {
      icon: "category",
      title: "Item"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
