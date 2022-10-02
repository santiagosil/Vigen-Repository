using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class Site
    {
        public string Nit { get; set; } = null!;
        public string Id { get; set; }
        public string Ubication { get; set; } = null!;
        public int Range { get; set; }
        public string CountryCode { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Tel { get; set; } = null!;

        public virtual Organization NitNavigation { get; set; } = null!;
    }
}
