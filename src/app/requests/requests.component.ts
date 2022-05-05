import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import * as data from '../data/data.const';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})

export class RequestsComponent implements OnInit {

  constructor() { }
  appName: string = "";
  appList: string[] = [];
  description: string = "";
  reason: string = "";
  responsible: string = "";
  shortName: string = "";
  shortNameRus: string = "";
  itLeader: string = "";
  releaseManager: string = "";
  devLeader: string = "";
  developers: string = "";
  testers: string = "";
  modeWork: string = "просмотр";
  pDisabled: string = "true";
  IPC: boolean = false;
  Spark: boolean = false;
  HDFS: boolean = false;
  Impala: boolean = false;
  Oracle: boolean = false;
  Cognos: boolean = false;
  Tableau: boolean = false;
  GitLab: boolean = false;

  tbsDisplayedColumns: string[] = ['instance', 'tbsName', 'dateReq', 'sizeFirst', 'sizeInc', 'sizeNowCalc', 'sizeNowFactZT', 'sizeNowFactZPE'];
  tableSpaces = [];
  
  schOracleDisplayedColumns: string[] = ['instance', 'schNameOracle', 'schPrivilegies', 'ztSchName', 'zpeSchName'];
  schemaOracle = [];

  schOracleLnkTbsDisplayedColumns: string[] = ['instance', 'schNameOracle', 'tbsName', 'quota', 'defaultTbs'];
  schOracleLnkTbs = [];

  ngOnInit(): void {
    this.appList = data.appNameReq.sort();
    // this.tableSpaces = [{instance: "DM", tbsName: "EHD_TS_DM_PAO", dateReq: "2021", sizeFirst: 90, sizeInc: 9, sizeNowCalc: 99, sizeNowFactZT: 0, sizeNowFactZPE: 443.43}];
    //data.appReqTbs["ПАО"];
  }

  changeSize(){
    //data.tableSpaceSize[0].env.ЗПЭ.instans.DM[0].sizeFirst = Number(data.tableSpaceSize[0].env.ЗПЭ.instans.DM[0].sizeFirst) + 1;
    //this.tbsReq = Number(data.tableSpaceSize[0].env.ЗПЭ.instans.DM[0].sizeFirst);
  }

  changeApp(){
    if(this.appName != null){
      this.description = data.appReq[this.appName]["description"];
      this.shortName = this.appName;
      this.reason = data.appReq[this.appName]["reason"];
      this.responsible = data.appReq[this.appName]["responsible"];
      this.shortNameRus = data.appReq[this.appName]["shortNameRus"];
      this.itLeader = data.appReq[this.appName]["itLeader"];
      this.releaseManager = data.appReq[this.appName]["releaseManager"];
      this.devLeader = data.appReq[this.appName]["devLeader"];
      this.developers = data.appReq[this.appName]["developers"];
      this.testers = data.appReq[this.appName]["testers"];
      this.IPC = data.appReq[this.appName]["components"]["IPC"];
      this.Spark = data.appReq[this.appName]["components"]["Spark"];
      this.HDFS = data.appReq[this.appName]["components"]["HDFS"];
      this.Impala = data.appReq[this.appName]["components"]["Impala"];
      this.Oracle = data.appReq[this.appName]["components"]["Oracle"];
      this.Cognos = data.appReq[this.appName]["components"]["Cognos"];
      this.Tableau = data.appReq[this.appName]["components"]["Tableau"];
      this.GitLab = data.appReq[this.appName]["components"]["GitLab"];
      this.tableSpaces = data.appReqTbs[this.appName];
      this.schemaOracle = data.appReqSch[this.appName];
      this.schOracleLnkTbs = data.appReqSchOraLnkTbs[this.appName];
    }
  }

  changeMode(){
    (this.modeWork == "просмотр")? this.modeWork = "редактирование" : this.modeWork = "просмотр";  
  }

}