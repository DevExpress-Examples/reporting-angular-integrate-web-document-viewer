import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef } from '@angular/core';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";

@Component({
  selector: 'report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.css']
})
export class ReportViewerComponent implements AfterViewInit {

  koReportUrl = ko.observable(null);
  _reportUrl;

  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const reportUrl = this.koReportUrl,
      host = 'http://localhost:54114/', 
      container = this.renderer.createElement("div");
    container.innerHTML = Html;
    this.renderer.appendChild(this.scripts.nativeElement, container);
    ko.applyBindings({
      reportUrl, // The URL of a report that is opened in the Document Viewer when the application starts.  
      requestOptions: { // Options for processing requests from the Web Document Viewer.  
        host, // URI of your backend project.  
        invokeAction: "/WebDocumentViewer/Invoke" // The URI path of the controller action that processes requests.  
      }
    }, this.control.nativeElement);
  }

  @Input()
  set reportUrl(reportUrl: string) {
    this._reportUrl = reportUrl;
    this.koReportUrl(reportUrl);
  }
  get reportUrl() {
    return this._reportUrl;
  }
}