import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import * as data from '../data/data.const';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})

export class RequestsComponent implements OnInit {

  constructor(private http: HttpClient) { }

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
  IPC: boolean = false;
  Spark: boolean = false;
  HDFS: boolean = false;
  Impala: boolean = false;
  Oracle: boolean = false;
  Cognos: boolean = false;
  Tableau: boolean = false;
  GitLab: boolean = false;
  reqEditable: boolean = false;
  response: any;

  tbsDisplayedColumns: string[] = ['instance', 'tbsName', 'dateReq', 'sizeFirst', 'sizeInc', 'sizeNowCalc', 'sizeNowFactZT', 'sizeNowFactZPE'];
  tableSpaces = [];
  
  schOracleDisplayedColumns: string[] = ['instance', 'schNameOracle', 'schPrivilegies', 'ztSchName', 'zpeSchName'];
  schemaOracle = [];

  schOracleLnkTbsDisplayedColumns: string[] = ['instance', 'schNameOracle', 'tbsName', 'quota', 'defaultTbs'];
  schOracleLnkTbs = [];

  innerDisplayedColumns: string[] = ['schPrivilegies'];

  grantList: string[] = [
    "CREATE SESSION", 
    "CREATE TABLE", 
    "CREATE VIEW", 
    "CREATE MATERIALIZED VIEW", 
    "CREATE SEQUENCE", 
    "CREATE SYNONYM", 
    "CREATE PROCEDURE", 
    "CREATE TRIGGER", 
    "CREATE TYPE", 
    "EXEMPT ACCESS POLICY",
    "ROLE CONNECT",
    "ROLE RESOURCE"];

  ngOnInit(): void {
    this.appList = data.appNameReq.sort();
    this.http.get('http://localhost:8080/ords/obe/appname/namelist').subscribe(
      (response) => {
        this.response = response;
        console.log(this.response);
      }
    )
  }

  changeSize(){
  }

  changeApp(){
    if(this.appName != ""){
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
    }else{
      this.reqEditable = false;
      this.modeWork == "просмотр";
    }
  }

  changeMode(){
    if(this.appName != ""){
      (this.modeWork == "просмотр")? this.modeWork = "редактирование" : this.modeWork = "просмотр";
      this.reqEditable = !this.reqEditable;
    }  
  }

  saveBasic(){

  }

  scroll(el: HTMLElement) {
    const id = 'profilePhoto';
    const yOffset = -70; 
    const element = document.getElementById(id);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

}
