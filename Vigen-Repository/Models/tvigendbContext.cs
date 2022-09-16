using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Vigen_Repository.Models
{
    public partial class tvigendbContext : DbContext
    {
        public tvigendbContext()
        {
        }

        public tvigendbContext(DbContextOptions<tvigendbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Notify> Notifies { get; set; } = null!;
        public virtual DbSet<Oganization> Oganizations { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=tvigendb; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Notify>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("notify");

                entity.Property(e => e.Distance).HasColumnName("distance");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.Identification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("identification");

                entity.Property(e => e.Place)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("place");

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("title");

                entity.HasOne(d => d.IdentificationNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Identification)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__notify__identifi__398D8EEE");
            });

            modelBuilder.Entity<Oganization>(entity =>
            {
                entity.HasKey(e => e.Nit)
                    .HasName("PK__oganizat__DF97D0E57EEE5188");

                entity.ToTable("oganization");

                entity.Property(e => e.Nit)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nit");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

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
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("ubication");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Identification)
                    .HasName("PK__users__AAA7C1F488E21119");

                entity.ToTable("users");

                entity.Property(e => e.Identification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("identification");

                entity.Property(e => e.Birthdate)
                    .HasColumnType("date")
                    .HasColumnName("birthdate");

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
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
