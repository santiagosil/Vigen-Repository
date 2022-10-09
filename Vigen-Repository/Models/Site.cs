using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("site")]
    public partial class Site
    {
        [Column("nit")]
        public string Nit { get; set; } = null!;

        [Column("id")]
        public string Id { get; set; }

        [Column("ubication")]
        public string Ubication { get; set; } = null!;

        [Column("range")]
        public int Range { get; set; }

        [Column("country_code")]
        public string CountryCode { get; set; } = null!;

        [Column("phone")]
        public string Phone { get; set; } = null!;

        [Column("tel")]
        public string Tel { get; set; } = null!;

    }
}
