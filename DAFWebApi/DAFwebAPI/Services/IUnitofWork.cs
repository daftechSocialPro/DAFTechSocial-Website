



namespace DAFwebAPI.Services
{
    public interface IUnitOfWork
    {
        IUserRepository userRepository { get; }
         


        Task SaveChanges();
    }
}
