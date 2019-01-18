import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from './chart-doughnut/chart-doughnut.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartPolarComponent } from './chart-polar/chart-polar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartLineComponent,
    ChartBarComponent,
    ChartDoughnutComponent,
    ChartRadarComponent,
    ChartPieComponent,
    ChartPolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
