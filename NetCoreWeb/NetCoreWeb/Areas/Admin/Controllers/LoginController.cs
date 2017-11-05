using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreWeb.Areas.Admin.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NetCoreWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class LoginController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            //LoginModel model = new LoginModel();
            return View(new LoginModel());
        }

        public IActionResult Forbidden() {

            ContentResult result = new ContentResult();
            result.Content = "未登录";
            result.ContentType = "text/html";
            return result;
        }

        [HttpPost]
        public IActionResult Index(LoginModel model) {

           return RedirectToAction("Index", "Main", new { name = model.UserName, model.Password });

        }
    }

}
