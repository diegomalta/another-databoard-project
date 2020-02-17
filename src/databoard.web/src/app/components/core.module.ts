import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
// material
import { MaterialModule } from '../shared/material.module';
// components
import { GoogleBarchartComponent } from './charts/google-barchart.component';

// services
import { GoogleChartService } from './services/google-chart.service'
import { GoogleChartBaseService } from './services/google-chart-base.service';
import { GoogleAreachartComponent } from './charts/google-areachart.component';


@NgModule({
  declarations: [ToolbarComponent, GoogleBarchartComponent, GoogleAreachartComponent],
  exports: [ToolbarComponent, GoogleBarchartComponent, GoogleAreachartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [GoogleChartBaseService, GoogleChartService]
})
export class CoreModule { }
