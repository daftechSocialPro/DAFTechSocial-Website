using Microsoft.EntityFrameworkCore;

using tmretApi.Data;
using tmretApi.Entities;
using tmretApi.Helpers;

namespace MahberApi.Services.TemretExecutive
{
    public class DegafiRepository : IDegafiRepostiory
    {

        private readonly ApplicationDbContext _context;
        public DegafiRepository(ApplicationDbContext context)
        {
            _context = context;


        }


        public async Task Create(Degafi degafi)
        {
            try
            {

                if (degafi.Photo != null)
                {
                    var image = degafi.Photo;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Degafi_upload_photo/"), degafi.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    degafi.UserPhoto = "Assets/Degafi_upload_photo/" + degafi.ID + fileExtension;
                }


                await _context.Degafi.AddAsync(degafi);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public async Task CreatePayment(Payment Payment)
        {
            try
            {

               

                await _context.Payments.AddAsync(Payment);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
        public async Task<List<Degafi>> GetAll(Guid mahberId)
        {

            var mahber = await _context.DefafiMahbers.Where(x=>x.UserId==mahberId).FirstOrDefaultAsync();

            if (mahber != null)
            {

                return await _context.Degafi.Include(x => x.DegafiSetting).Include(x => x.Payments).Include(y => y.Mahber).Where(x => x.MahberId == mahber.ID).ToListAsync();
            }
            else { return new List<Degafi>(); }
           
        }

        public async Task<List<Payment>> GetAllPaymentsByid(Guid fanId)
        {
            return await _context.Payments.Include(x => x.DegafiId).Where(x => x.DegafiId == fanId).ToListAsync();
        }

        public async Task Update(Degafi degafi)
        {
            try
            {

                var Degafis = _context.Degafi.Find(degafi.ID);


                if(degafi.Name!=null)
                    Degafis.Name = degafi.Name;
                if (degafi.DegafiSettingId !=Guid.Empty)
                    Degafis.DegafiSettingId = degafi.DegafiSettingId;
                if (degafi.BirthDate != null)
                    Degafis.BirthDate = degafi.BirthDate;
                if (degafi.PhoneNumber != null)
                    Degafis.PhoneNumber = degafi.PhoneNumber;
                if (degafi.Description != null)
                    Degafis.Description = degafi.Description;
                if (degafi.IsActive )
                    Degafis.IsActive = degafi.IsActive;
                if (degafi.IdGiven )
                    Degafis.IdGiven =degafi.IdGiven;


                if (degafi.Photo != null)
                {
                    var image = degafi.Photo;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Executives_upload_photo/"), degafi.ID.ToString() + fileExtension);

                    if (File.Exists(savingPath))
                    {
                        File.Delete(savingPath);
                    }

                    await image.SaveAsAsync(savingPath);
                    Degafis.UserPhoto = "Assets/Executives_upload_photo/" + degafi.ID + fileExtension;
                }


                _context.Degafi.Update(Degafis);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
