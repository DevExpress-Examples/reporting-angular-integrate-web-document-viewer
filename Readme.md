<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128596817/25.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T566419)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for Angular - Integrate a Web Document Viewer in Angular App

This example incorporates the Web Document Viewer into a client-side app built with Angular. The example consists of two parts:

- The [ServerApp](ServerApp) folder contains the backend project. The project is an ASP.NET Core application that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements custom web report storage.

- The [angular-document-viewer](angular-document-viewer) folder contains the client application built with [Angular](https://angular.io/).

## Quick Start

### Server

In the *ServerApp* folder, run the following command:

```
dotnet run
```

The server starts at http://localhost:5000. To debug the server, run the application in Visual Studio.

### Client

In the *angular-document-viewer* folder, run the following commands:

```
npm install
npm start
```

5. Point your browser to [http://localhost:4200/](http://localhost:4200/) to see the result.

![](images/screenshot.png)


## Files to Review

- [app.ts](angular-document-viewer/src/app/app.ts)
- [app.html](angular-document-viewer/src/app/app.html)
- [Program.cs](ServerApp/Program.cs)
- [ReportingControllers.cs](ServerApp/Controllers/ReportingControllers.cs)

## Documentation 

* [Create an Angular Front-End Application with a Document Viewer](https://docs.devexpress.com/XtraReports/119430)
* [Document Viewer Server-Side Application (ASP.NET Core)](https://docs.devexpress.com/XtraReports/400197) 
* [Document Viewer's Server-Side Configuration (ASP.NET MVC)](https://docs.devexpress.com/XtraReports/118597)
* [Troubleshooting](https://docs.devexpress.com/XtraReports/401726/web-reporting/general-information/troubleshooting)
* [Reporting Application Diagnostics](https://docs.devexpress.com/XtraReports/401687/web-reporting/general-information/application-diagnostics)

## More Examples

* [How to use the Web Report Designer in JavaScript with Angular](https://github.com/DevExpress-Examples/reporting-angular-integrate-report-designer)

<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-angular-integrate-web-document-viewer&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-angular-integrate-web-document-viewer&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
