using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LoginSystemApp.Models
{
    public class SignUpModel
    {
        [Required(ErrorMessage ="Please enter email address")]
        [Display(Name ="Email ")]
        

        public string Email { get; set; }
        public string Password { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Mobile { get; set; }
        public string Gender { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public int Is_Active { get; set; }
    }
}
