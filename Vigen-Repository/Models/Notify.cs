using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("notify")]
    public partial class Notify
    {
        [Key]
        [Column("id")]
        public int? Id { get; set; } = null!;

        [Column("user_id")]
        public string UserId { get; set; } = null!;

        [Column("title")]
        public string Title { get; set; } = null!;

        [Column("state_id")]
        public int StateId { get; set; }

        [Column("description")]
        public string Description { get; set; } = null!;

        [Column("organization_type_id")]
        public int OrganizationTypeId { get; set; }
    }
}
