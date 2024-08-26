using DevExpress.XtraReports.Web.WebDocumentViewer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ServerSideApp.Controllers {
    public class HomeController : Controller {

        private readonly IConfiguration _configuration;

        public HomeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IActionResult Index() {
            var applicationUrls = System.Environment.GetEnvironmentVariable("ASPNETCORE_URLS");
            ViewBag.ApplicationUrls = applicationUrls;
            return View();
        }
        public IActionResult Error() {
            Models.ErrorModel model = new Models.ErrorModel();
            return View(model);
        }
        
    }
}