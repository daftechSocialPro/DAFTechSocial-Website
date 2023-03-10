

namespace tmretApi.Entities{


public class DegafiSetting : Common {


public virtual DegafiMahber mahber {get;set;}
public Guid mahberId {get;set;}

public string name {get;set;}

public float money {get;set;}


public paymentStyle paymentStyle {get;set;}



public string description {get;set;}




}


public enum paymentStyle{
    PerMonth,
    PerYear

}

}