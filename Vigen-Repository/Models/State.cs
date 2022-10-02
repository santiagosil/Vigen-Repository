using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class State
    {
        public State()
        {
            Notifies = new HashSet<Notify>();
        }

        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;

        public virtual ICollection<Notify> Notifies { get; set; }
    }
}
