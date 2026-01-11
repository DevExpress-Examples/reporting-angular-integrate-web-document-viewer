import { Component, ViewEncapsulation } from '@angular/core';
import { DxReportViewerModule } from 'devexpress-reporting-angular';


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  imports: [DxReportViewerModule],
  templateUrl: './app.html',
  styleUrls: [
    "../../node_modules/devextreme/dist/css/dx.light.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
  ]
})
export class App {
    title = 'DXReportViewerSample';
    reportUrl: string = 'TestReport';
    hostUrl: string = 'http://localhost:5000/';
    // Use this line if you use an ASP.NET MVC backend
    //invokeAction: string = "/WebDocumentViewer/Invoke";
    // Use this line if you use an ASP.NET Core backend
    invokeAction: string = '/DXXRDV';
}
