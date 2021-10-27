Imports System.Linq
Imports DevExpress.Web.Mvc.Controllers
Imports System.Web.Mvc
Imports DevExpress.XtraReports.Web.Extensions

Namespace ServerSide.Controllers
	Public Class WebDocumentViewerController
		Inherits WebDocumentViewerApiControllerBase

		Public Overrides Function Invoke() As ActionResult
			Dim result = MyBase.Invoke()
			' Allow cross-domain requests.
			Response.AppendHeader("Access-Control-Allow-Origin", "*")
			Return result
		End Function

		<HttpPost>
		Public Function GetReports() As ActionResult
			Response.AppendHeader("Access-Control-Allow-Origin", "*")
			Dim result = New JsonResult With {.Data = ReportStorageWebService.GetUrls().ToArray()}
			Return result
		End Function
	End Class
End Namespace