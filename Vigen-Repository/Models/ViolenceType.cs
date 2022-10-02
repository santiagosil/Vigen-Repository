using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class ViolenceType
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
    }
}
