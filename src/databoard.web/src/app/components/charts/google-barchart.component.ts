import { Component, OnInit, Input } from '@angular/core';
import { BarChartModel } from '../services/google-chart-model';
import { GoogleChartService } from '../services/google-chart.service';

@Component({
  selector: 'app-google-barchart',
  templateUrl: './google-barchart.component.html',
  styleUrls: ['./google-barchart.component.css']
})
export class GoogleBarchartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: BarChartModel;
  @Input() elementId: string;
  
  constructor(private _chartService: GoogleChartService) { }

  ngOnInit(): void {
    this._chartService.BuildBarChart(this.elementId, this.data, this.config);
  }

}
