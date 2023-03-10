using tmretApi.Entities;

namespace MahberApi.Services.TemretExecutive
{
    public interface IDegafiRepostiory 
    {

        Task Create(Degafi degafi);

        Task Update(Degafi degafi);

        Task<List<Degafi>> GetAll(Guid mahberId);

        Task CreatePayment(Payment Payment);
        Task<List<Payment>> GetAllPaymentsByid(Guid fanId);
    }
}
