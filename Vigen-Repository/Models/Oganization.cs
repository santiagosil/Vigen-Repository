using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class Oganization
    {
        public string Nit { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Ubication { get; set; } = null!;
        public int Range { get; set; }
        public string Phone { get; set; } = null!;
        public string Tel { get; set; } = null!;
    }
}
