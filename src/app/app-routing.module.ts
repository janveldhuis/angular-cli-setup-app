import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridviewerComponent} from './gridviewer/gridviewer.component';
import {FlexboxviewerComponent} from './flexboxviewer/flexboxviewer.component';

const routes: Routes = [
  {
    path: 'gridlayout',
    component: GridviewerComponent,
    data: {title: 'CSS Grid layout'}
  },
  {
    path: 'flexbox',
    component: FlexboxviewerComponent,
    data: {title: 'Flexbox'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
