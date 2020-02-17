import { Component, OnInit, Input } from '@angular/core';
import { AreaChartModel } from '../services/google-chart-model';
import { GoogleChartService } from '../services/google-chart.service';

@Component({
  selector: 'app-google-areachart',
  templateUrl: './google-areachart.component.html',
  styleUrls: ['./google-areachart.component.css']
})
export class GoogleAreachartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: AreaChartModel;
  @Input() elementId: string;

  constructor(private _chartService: GoogleChartService) { }

  ngOnInit(): void {
    this._chartService.BuildAreaChart(this.elementId, this.data, this.config);
  }

}
