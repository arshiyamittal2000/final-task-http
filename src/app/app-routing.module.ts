import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [

  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', component: PageComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
