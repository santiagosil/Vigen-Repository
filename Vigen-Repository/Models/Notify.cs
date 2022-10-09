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
        public int Id { get; set; }

        [Column("user_id")]
        public string UserId { get; set; } = null!;

        [Column("title")]
        public string Title { get; set; } = null!;

        [Column("state_id")]
        public string StateId { get; set; } = null!;

        [Column("description")]
        public string Description { get; set; } = null!;

        [Column("organization_type_id")]
        public string OrganizationTypeId { get; set; } = null!;
    }
}
