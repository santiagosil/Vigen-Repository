using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Vigen_Repository.Models
{
    public partial class vigendbContext : DbContext
    {
        public vigendbContext()
        {
        }

        public vigendbContext(DbContextOptions<vigendbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Notify> Notifies { get; set; } = null!;
        public virtual DbSet<Organization> Organizations { get; set; } = null!;
        public virtual DbSet<OrganizationType> OrganizationTypes { get; set; } = null!;
        public virtual DbSet<Site> Sites { get; set; } = null!;
        public virtual DbSet<State> States { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<ViolenceType> ViolenceTypes { get; set; } = null!;
        public virtual DbSet<ViolenceTypesOrganization> ViolenceTypesOrganizations { get; set; } = null!;
        public virtual DbSet<Poll> Polls { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=vigendb; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<ViolenceTypesOrganization>(x =>
            {
                x.HasKey(y => new { y.OrganizationTypeId, y.IdViolence });
            });

            modelBuilder.Entity<Site>(x =>
            {
                x.HasKey(y => new { y.Id, y.Nit });
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
