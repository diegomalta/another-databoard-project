export class PieChartModel {
    title: string;
    pieHole: number

   constructor(title: string, pieHole: number) {
       this.title = title;
       this.pieHole = pieHole;
   }
}

export class BarChartModel {
   title: string;
   hAxis: any;
   vAxis: any;

  constructor(title: string, hAxis: object, vAxis: object) {
      this.title = title;
      this.hAxis = hAxis;
      this.vAxis = vAxis;
  }
}

export class AreaChartModel{
    title: string;
    hAxis: any;
    vAxis: any;

    constructor(title: string, hAxis: object, vAxis: object) {
        this.title = title;
        this.hAxis = hAxis;
        this.vAxis = vAxis;
    }
}