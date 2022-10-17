using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vigen_Repository.Models
{
    [Table("poll")]
    public class Poll
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("date")]
        public DateTime Date { get; set; }

        [Column("genero")]
        public int Genero { get; set; }

        [Column("orientacion_sexual")]
        public int OrientacionSexual { get; set; }

        [Column("edad")]
        public int Edad { get; set; }

        [Column("municipio")]
        public int Municipio { get; set; }

        [Column("sector")]
        public int Sector { get; set; }

        [Column("nivel_educativo")]
        public int NivelEducativo { get; set; }

        [Column("estado_civil")]
        public int EstadoCivil { get; set; }

        [Column("etnia")]
        public int etnia { get; set; }

        [Column("ingresos")]
        public int Ingresos { get; set; }

        [Column("ocupacion")]
        public int Ocupacion { get; set; }

        [Column("p1")]
        public int P1 { get; set; }

        [Column("p2")]
        public int P2 { get; set; }

        [Column("p3")]
        public int P3 { get; set; }

        [Column("p4")]
        public int P4 { get; set; }

        [Column("p5")]
        public int P5 { get; set; }

        [Column("p6")]
        public int P6 { get; set; }

        [Column("p7")]
        public int P7 { get; set; }



    }
}
