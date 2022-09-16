using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class User
    {
        public string Identification { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public DateTime Birthdate { get; set; }
        public string CountryCode { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Occupation { get; set; } = null!;
        public string PostalCode { get; set; } = null!;
        public string MaritalStatus { get; set; } = null!;
        public string Ubication { get; set; } = null!;
    }
}
