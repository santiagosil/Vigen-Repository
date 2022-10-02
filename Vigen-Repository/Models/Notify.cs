using System;
using System.Collections.Generic;

namespace Vigen_Repository.Models
{
    public partial class Notify
    {
        public int Id { get; set; }
        public string UserId { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string StateId { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string OrganizationTypeId { get; set; } = null!;

        public virtual OrganizationType OrganizationType { get; set; } = null!;
        public virtual State State { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
