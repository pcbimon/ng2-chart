import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartLineComponent} from './chart-line/chart-line.component';
import {ChartBarComponent} from './chart-bar/chart-bar.component';
import {ChartPieComponent} from './chart-pie/chart-pie.component';
import {ChartDoughnutComponent} from './chart-doughnut/chart-doughnut.component';
import {ChartPolarComponent} from './chart-polar/chart-polar.component';
import {ChartRadarComponent} from './chart-radar/chart-radar.component';

const routes: Routes = [
  { path: 'line-chart' , component: ChartLineComponent},
  { path: 'bar-chart' , component: ChartBarComponent},
  { path: 'pie-chart' , component: ChartPieComponent},
  { path: 'doughnut-chart' , component: ChartDoughnutComponent},
  { path: 'polar-chart' , component: ChartPolarComponent},
  { path: 'radar-chart' , component: ChartRadarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
