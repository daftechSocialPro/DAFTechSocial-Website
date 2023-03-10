using tmretApi.Data;
using tmretApi.Entities;

namespace tmretApi.Services
{


    public class DegafiSettingRepository : IDegafiSettingRepository
    {

        private readonly ApplicationDbContext _context;
        public DegafiSettingRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task Create(DegafiSetting desetting)
        {
            try
            {




                await _context.DegafiSettings.AddAsync(desetting);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        public List<DegafiSetting> GetAll(Guid userId)
        {
           
            return _context.DegafiSettings.Where(x=>x.mahberId==userId).ToList();
        }

        public async Task Update(DegafiSetting desetting)
        {
            try
            {

                var dese = _context.DegafiSettings.Find(desetting.ID);

                dese.name = desetting.name;
                dese.paymentStyle = desetting.paymentStyle;
                dese.money = desetting.money;
                dese.description = desetting.description;




                _context.DegafiSettings.Update(dese);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }




        }


        public async Task Delete(Guid desettingId)
        {
            try
            {
                var dsetting = await _context.DegafiSettings.FindAsync(desettingId);
                _context.DegafiSettings.Remove(dsetting);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


    }

}
