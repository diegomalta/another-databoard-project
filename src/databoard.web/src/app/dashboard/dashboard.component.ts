import { Component, OnInit } from '@angular/core';
import { BarChartModel, AreaChartModel } from '../components/services/google-chart-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataBarChart: any[];
  configBarChart: BarChartModel;
  elementIdBarChart: String;

  dataAreaChart: any[];
  configAreaChart: BarChartModel;
  elementIdAreaChart: String;

  constructor() { }

  ngOnInit(): void {

    // Bar Chart
    this.dataBarChart = [
      ['Day', 'Hours'],
      ['Sunday',3],
      ['Monday',3],
      ['Tuesday',2],
      ['Wednesday',5],
      ['Thursday',4],
      ['Friday', 8],
      ['Saturday', 10]];

      var hAxisBarChart = {
        title: 'Day of week',
      };
      var vAxisBarChart = {
        title: 'Hours',
      };

      this.configBarChart = new BarChartModel('Bar Chart', hAxisBarChart, vAxisBarChart);
      this.elementIdBarChart = 'myBarChart'

      // area chart

      this.dataAreaChart = [
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
      ];

      var hAxisAreaChart = {title: 'Year',  titleTextStyle: {color: '#333'}};
      var vAxisAreaChart = {minValue: 0};

      this.configAreaChart = new AreaChartModel('Area Chart',hAxisAreaChart,vAxisAreaChart);
      this.elementIdAreaChart = 'myAreaChart'
  }

}
