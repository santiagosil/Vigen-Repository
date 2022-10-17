using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("violence_types_organization")]
    public partial class ViolenceTypesOrganization
    {
        [Column("organization_type_id")]
        public int OrganizationTypeId { get; set; }

        [Column("id_violence")]
        public string IdViolence { get; set; } = null!;
    }
}
