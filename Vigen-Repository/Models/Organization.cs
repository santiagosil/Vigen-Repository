using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class Organization
    {
        public Organization()
        {
            Sites = new HashSet<Site>();
        }

        public string Nit { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Tel { get; set; } = null!;

        public virtual ICollection<Site> Sites { get; set; }
    }
}
