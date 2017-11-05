using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreWeb.Areas.Admin.Models
{
    public class LoginModel
    {
        public string UserName { get; set; }
        [Required, StringLength(5)]
        public string Password { get; set; }
    }
}
