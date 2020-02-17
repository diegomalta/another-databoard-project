import { Injectable } from '@angular/core';
import { GoogleChartBaseService } from './google-chart-base.service';
import { BarChartModel, PieChartModel } from './google-chart-model'

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleChartService extends GoogleChartBaseService {

  constructor() { super(); }  

  // Bar Chart
  public BuildBarChart(elementId: string, data: any[], config: BarChartModel) : void {  
    var chartFunc = () => { return new google.visualization.ColumnChart(document.getElementById(elementId)); };
    var options = {
                  title: config.title,
                  hAxis: config.hAxis,
                  vAxis: config.vAxis
        };

    this.buildChart(data, chartFunc, options);
  }

  public BuildAreaChart(elementId: string, data: any[], config: BarChartModel)
  {
    var chartFunc = () => { return new google.visualization.AreaChart(document.getElementById(elementId)); };
    var options = {
                  title: config.title,
                  hAxis: config.hAxis,
                  vAxis: config.vAxis
        };

    this.buildChart(data, chartFunc, options);
  }

  // Pie Chart
  public BuildPieChart(elementId: string, data: any[], config: PieChartModel) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }
}
