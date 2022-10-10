using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("violence_types_organization")]
    public partial class ViolenceTypesOrganization
    {
        [Column("nit")]
        public string Nit { get; set; } = null!;

        [Column("id_violence")]
        public int IdViolence { get; set; }
    }
}
