using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace tmretApi.Entities
{
    public class Degafi : Common
    {

        public virtual DegafiMahber Mahber { get; set; }
        public Guid MahberId { get; set; }

        public virtual DegafiSetting DegafiSetting { get; set; }
        public Guid DegafiSettingId { get; set; }
        public string Name { get; set; }
        public string UserPhoto { get; set; }
        public string PhoneNumber { get; set; }

        [NotMapped]
        [JsonIgnore] public IFormFile Photo { get; set; }
        public string Description { get; set; }
        public string BirthDate { get; set; }
        public bool IsActive { get; set; }
        public bool IdGiven { get; set; }
        public string InActiveDescription { get; set; }

        [ForeignKey("DegafiId")]
        public virtual  ICollection<Payment> Payments { get; set; }

        
    }
}
