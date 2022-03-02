import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { Item1Component } from './item1/item1.component';
import { Item10Component } from './item10/item10.component';
import { Item11Component } from './item11/item11.component';
import { Item12Component } from './item12/item12.component';
import { Item13Component } from './item13/item13.component';
import { Item14Component } from './item14/item14.component';
import { Item15Component } from './item15/item15.component';
import { Item16Component } from './item16/item16.component';
import { Item17Component } from './item17/item17.component';
import { Item18Component } from './item18/item18.component';
import { Item19Component } from './item19/item19.component';
import { Item2Component } from './item2/item2.component';
import { Item20Component } from './item20/item20.component';
import { Item21Component } from './item21/item21.component';
import { Item22Component } from './item22/item22.component';
import { Item23Component } from './item23/item23.component';
import { Item3Component } from './item3/item3.component';
import { Item4Component } from './item4/item4.component';
import { Item5Component } from './item5/item5.component';
import { Item6Component } from './item6/item6.component';
import { Item7Component } from './item7/item7.component';
import { Item8Component } from './item8/item8.component';
import { Item9Component } from './item9/item9.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'item-1', component: Item1Component },
  { path: 'item-2', component: Item2Component },
  { path: 'item-3', component: Item3Component },
  { path: 'item-4', component: Item4Component },
  { path: 'item-5', component: Item5Component },
  { path: 'item-6', component: Item6Component },
  { path: 'item-7', component: Item7Component },
  { path: 'item-8', component: Item8Component },
  { path: 'item-9', component: Item9Component },
  { path: 'item-10', component: Item10Component },
  { path: 'item-11', component: Item11Component },
  { path: 'item-12', component: Item12Component },
  { path: 'item-13', component: Item13Component },
  { path: 'item-14', component: Item14Component },
  { path: 'item-15', component: Item15Component },
  { path: 'item-16', component: Item16Component },
  { path: 'item-17', component: Item17Component },
  { path: 'item-18', component: Item18Component },
  { path: 'item-19', component: Item19Component },
  { path: 'item-20', component: Item20Component },
  { path: 'item-21', component: Item21Component },
  { path: 'item-22', component: Item22Component },
  { path: 'item-23', component: Item23Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
