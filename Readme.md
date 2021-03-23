# How to use the Web Document Viewer in JavaScript with Angular

## Upgrade the Project

Before you run the project, verify the DevExpress version. If necessary, upgrade it to the DevExpress version you're currently using. Make sure to use the same version of DevExpress components for both Front-end and Back-end applications.

Follow these steps to update the project:

### Upgrade the server-side app

Use the [DevExpress Project Converter](https://docs.devexpress.com/ProjectConverter/2529/project-converter) to upgrade assembly references for the back-end project solution (**CS\ServerSide.sln** or **VB\ServerSide.sln**). You can open the project in Visual Studio and navigate to the Menu: Extensions -> DevExpress -> Project Converter. Select the required version and upgrade the project.

### Upgrade the client-side app

Navigate to the `package.json` file in the **JS\ClientSide_Angular5+\angular-example** folder and change all DevExpress script versions to the version you're using on the server side. For instance, if you're using v20.2.6, modify the package.json file as follows:

```
    {
        ...
        "dependencies": {
            ...
            "devexpress-reporting-angular": "20.2.6",
            "@devexpress/analytics-core": "20.2.6",            
            "devextreme": "20.2.6",
        },
        ...
    }
```

Open the **JS\ClientSide_Angular5+\angular-example** folder in the console and run the command to download updated packages:
```
npm install
```

## Implementation Details
This example consists of two parts: 

- A server (back-end) ASP.NET MVC project that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- An <a href="https://angular.io/">Angular</a> front-end client application.

### Run the Example
Perform the following steps to run this example:

1. Open the back-end project solution (**CS\ServerSide.sln** or **VB\ServerSide.sln**) in Visual Studio and run the project.
2. Navigate to the **JS\ClientSide_Angular5+\angular-example** folder that is the client part's root folder.
3. Open the console and run the following command to download packages:

    ```npm install```

4. Run the command to compile and start the client part:

    ```ng serve```

5. Point your browser to [http://localhost:4200/](http://localhost:4200/) to see the result.

![](images/screenshot.png)

For a step-by-step tutorial, refer to the
[Document Viewer Integration in Angular](https://docs.devexpress.com/XtraReports/119430) topic.

## Using an ASP.NET Core backend

To connect an Angular application to an ASP.NET Core backend and to configure an ASP.NET Core application, follow steps described in this help topic: [Document Viewer Server-Side Application (ASP.NET Core)](https://docs.devexpress.com/XtraReports/400197/create-end-user-reporting-applications/web-reporting/javascript-reporting/document-viewer/server-side-configuration/document-viewer-server-side-configuration-asp-net-core). A controller with the "DXXRDV" route will be registered in this application automatically. So, you will be able to connect your React viewer component to this route:
```ts
invokeAction = "DXXRDV";
```
Take a special note that it will be necessary to move the implementation of the "MyReportStorage" report storage to your ASP.NET Core application and register it there as demonstrated in the aforementioned help topic.


**See also**:

* [How to use the Web Report Designer in JavaScript with Angular](https://github.com/DevExpress-Examples/how-to-use-the-web-report-designer-in-javascript-with-angular-t566422) example on GitHub
