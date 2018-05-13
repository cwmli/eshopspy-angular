import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameusComponent } from './gameus/gameus.component';
import { GameusDetailComponent } from './gameus-detail/gameus-detail.component';

const routes: Routes = [
  { path: 'gameus', component: GameusComponent },
  { path: 'gameus/detail/:id', component: GameusDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { } 
