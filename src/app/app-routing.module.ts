import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenderBoxComponent } from './render-box/render-box.component';
import { AddThiefComponent } from './add-thief/add-thief.component';
import { AppComponent } from './app.component';
import { RemoveThievesComponent } from './remove-thieves/remove-thieves.component';
import { ThiefDetailsComponent } from './render-box/thief-details/thief-details.component';

const routes: Routes = [
  {
    path: '',
    component: RenderBoxComponent
  },
  {
    path: 'add',
    component: AddThiefComponent
  },
  {
    path: 'showall',
    // component: RenderBoxComponent
    redirectTo: ''
  },
  {
    path: 'remove',
    component: RemoveThievesComponent
  },
  {
    path: 'thief/:id',
    component: ThiefDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
