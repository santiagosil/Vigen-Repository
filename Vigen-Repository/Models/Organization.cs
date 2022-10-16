using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("organization")]
    public partial class Organization
    {
        [Key]
        [Column("nit")]
        public string Nit { get; set; } = null!;

        [Column("password")]
        public string Password { get; set; }

        [Column("name")]
        public string Name { get; set; } = null!;

        [Column("tel")]
        public string Tel { get; set; } = null!;

        [Column("phone")]
        public string Phone { get; set; }

        [Column("organization_type_id")]
        public int OrganizationTypeID { get; set; }

    }
}
