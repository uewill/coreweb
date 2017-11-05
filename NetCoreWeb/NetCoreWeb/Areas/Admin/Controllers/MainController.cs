using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreWeb.Areas.Admin.Models;
using Microsoft.AspNetCore.Authorization;

namespace NetCoreWeb.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class MainController:Controller
    {
       
        public IActionResult Index()
        {
            Test data = new Test("主窗体","描述");
            return View(data);
        }
    }
    public class Test:BaseAdminModel {
        public Test(string name,string des) {
            this.CategoryName = name;
            this.CategoryDes = des;
        }
    }
}