using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class Notify
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Place { get; set; } = null!;
        public string Identification { get; set; } = null!;
        public int? Distance { get; set; }

        public virtual User IdentificationNavigation { get; set; } = null!;
    }
}
