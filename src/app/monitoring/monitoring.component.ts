import { Component, OnInit, NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import * as data from '../data/data.const';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})

export class MonitoringComponent implements OnInit {

  

  appName: string = "";
  zoneName: string = "";
  instName: string = "";
  appNameList: string[] = [];
  zoneNameList: string[] = [];
  instNameList: string[] = [];
  zoneDisable: boolean = false;
  instDisable: boolean = false;
  appNameZone = new Map(Object.entries(data.appNameZone));

  
  tiles: any[] = [];

  multi: any[] = [];
  // view: [number, number] = [700, 300];
  view: [number, number] = [700, 300];
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Дата';
  yAxisLabel: string = 'Размер TS в Гб';
  timeline: boolean = true;
  autoScale: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }  

  ngOnInit(): void {
    this.appNameList = data.appName.sort();
  }

  
  showGraph(): void {
    this.tiles = [];
    if (this.zoneName != ""){
      if(this.instName == ""){
        console.log(data.tableSpaceSizeInstance[this.appName][this.zoneName])
        for (let inst in data.tableSpaceSizeInstance[this.appName][this.zoneName]){
          this.tiles.push({instanse: inst ,data: data.tableSpaceSizeInstance[this.appName][this.zoneName][inst]});
        }
      }else{
        console.log(data.tableSpaceSize[this.appName][this.zoneName][this.instName])
        for (let tbs in data.tableSpaceSize[this.appName][this.zoneName][this.instName]){
          this.tiles.push({instanse: tbs ,data: data.tableSpaceSize[this.appName][this.zoneName][this.instName][tbs]});
        }
      }
    } 
  }

  changeApps(): void {
    this.zoneNameList = (this.appNameZone.get(this.appName)?.zoneNameList.sort() || []) as string[];
    (this.zoneNameList.length > 1)? this.zoneDisable = true: this.zoneDisable = false;
    this.zoneName = "";
    this.instName = "";
    this.tiles = [];
  }

  changeZone(): void {
    this.instName = "";
    this.showGraph();
    this.instNameList = (data.appNameZoneInstance[this.appName][this.zoneName].sort() || []) as string[];
    (this.instNameList.length > 1)? this.instDisable = true: this.instDisable = false;
  }

  changeInstance(): void {
    this.showGraph();
  }

  constructor() {  }
}
