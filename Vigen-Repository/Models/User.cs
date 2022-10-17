using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("users")]
    public partial class User
    {
        [Key]
        [Column("identification")]
        public string Identification { get; set; } = null!;

        [Column("password")]
        public string Password { get; set; } = null!;

        [Column("name")]
        public string Name { get; set; } = null!;

        [Column("email")]
        public string Email { get; set; } = null!;

        [Column("birthdate")]
        public DateTime Birthdate { get; set; }

        [Column("country_code")]
        public string CountryCode { get; set; } = null!;

        [Column("phone")]
        public string Phone { get; set; } = null!;

        [Column("occupation")]
        public string Occupation { get; set; } = null!;

        [Column("postal_code")]
        public string PostalCode { get; set; } = null!;

        [Column("marital_status")]
        public string MaritalStatus { get; set; } = null!;

        [Column("ubication")]
        public string Ubication { get; set; } = null!;

        [Column("code")]
        public string Code { get; set; } = null!;

        [Column("verification")]
        public bool Verification { get; set; }
    }
}
