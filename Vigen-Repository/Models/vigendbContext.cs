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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=vigendb; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Notify>(entity =>
            {
                entity.ToTable("notify");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.OrganizationTypeId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("organization_type_id");

                entity.Property(e => e.StateId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("state_id");

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("title");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("user_id");

                entity.HasOne(d => d.OrganizationType)
                    .WithMany(p => p.Notifies)
                    .HasForeignKey(d => d.OrganizationTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__notify__organiza__46E78A0C");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Notifies)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__notify__state_id__45F365D3");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Notifies)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__notify__user_id__44FF419A");
            });

            modelBuilder.Entity<Organization>(entity =>
            {
                entity.HasKey(e => e.Nit)
                    .HasName("PK__organiza__DF97D0E56E6AE01F");

                entity.ToTable("organization");

                entity.Property(e => e.Nit)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nit");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Tel)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("tel");
            });

            modelBuilder.Entity<OrganizationType>(entity =>
            {
                entity.ToTable("organization_type");

                entity.Property(e => e.Id)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Site>(entity =>
            {
                entity.HasKey(e => new { e.Nit, e.Id })
                    .HasName("PK__site__3CB6EE6636BE1D29");

                entity.ToTable("site");

                entity.Property(e => e.Nit)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nit");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.CountryCode)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("country_code");

                entity.Property(e => e.Phone)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("phone");

                entity.Property(e => e.Range).HasColumnName("range");

                entity.Property(e => e.Tel)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("tel");

                entity.Property(e => e.Ubication)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("ubication");

                entity.HasOne(d => d.NitNavigation)
                    .WithMany(p => p.Sites)
                    .HasForeignKey(d => d.Nit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__site__nit__3C69FB99");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("state");

                entity.Property(e => e.Id)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Identification)
                    .HasName("PK__users__AAA7C1F43058DDBD");

                entity.ToTable("users");

                entity.Property(e => e.Identification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("identification");

                entity.Property(e => e.Birthdate)
                    .HasColumnType("date")
                    .HasColumnName("birthdate");

                entity.Property(e => e.Code)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("code");

                entity.Property(e => e.CountryCode)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("country_code");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.MaritalStatus)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("marital_status");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Occupation)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("occupation");

                entity.Property(e => e.Password)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Phone)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("phone");

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("postal_code");

                entity.Property(e => e.Ubication)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("ubication");

                entity.Property(e => e.Verification).HasColumnName("verification");
            });

            modelBuilder.Entity<ViolenceType>(entity =>
            {
                entity.ToTable("violence_type");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ViolenceTypesOrganization>(entity =>
            {
                entity.HasKey(e => new { e.Nit, e.IdViolence })
                    .HasName("PK__violence__EB0A37A8522F38F1");

                entity.ToTable("violence_types_organization");

                entity.Property(e => e.Nit)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nit");

                entity.Property(e => e.IdViolence).HasColumnName("id_violence");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
