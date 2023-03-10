namespace tmretApi.Entities
{
    public class Payment :Common
    {       

        public Guid DegafiId { get; set; }

        public float MoneyPayed { get; set; }

        public month Month { get; set; }

        public int Year { get; set; }

        public float MoneyRemaining { get; set; }

    }

    public enum month
    {
       Meskerem,
       Tekemet,
       Hedar,
       Tahsas,
       Ter,
       Yekatit,
       Megabit,
       Miyazia,
       Genbot,
       Sene,
       Hamele,
       Nehase

    } 
}
