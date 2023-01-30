using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Data.SqlClient;

namespace LoginSystemApp.Models
{
    public class DBConnection
    {
       public SqlConnection connection;
     public DBConnection()
        {
            connection = new SqlConnection("Data Source=DESKTOP-P714P32;Initial Catalog=SignLog;Integrated Security=True;TrustServerCertificate=True");
        }
    }
}
