using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace tmretApi.Entities{



    public class Advertisement : Common{

        public string Name { get; set; }
      
        public string Description {get;set;}

        public string AdPhoto { get; set; }

        [NotMapped]
        [JsonIgnore] public IFormFile Photo { get; set; }

        public DateTime FromDate {get; set;}

        public DateTime ToDate {get; set;}
               

    }
}