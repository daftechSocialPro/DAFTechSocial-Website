
using DAFwebAPI.Data;


namespace DAFwebAPI.Services
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext _db;

        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
           
            userRepository = new UserRepository(db);
          
        }
      
        public IUserRepository userRepository {get;set;}

        public async Task SaveChanges()
        {
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

