using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("state")]
    public partial class State
    {
        [Key]
        [Column("id")]
        public string Id { get; set; } = null!;

        [Column("name")]
        public string Name { get; set; } = null!;

        [Column("description")]
        public string Description { get; set; } = null!;
    }
}
