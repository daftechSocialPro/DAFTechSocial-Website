﻿using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using tmretApi.Data;
using tmretApi.Entities;
using tmretApi.Helpers;

namespace tmretApi.Services.Advert
{
    public class AdvertRepository : IAdvertRepository
    {

        private readonly ApplicationDbContext _context;
        public AdvertRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task Create(Advertisement advert)
        {
            try
            {
                advert.FromDate = advert.FromDate.ToUniversalTime();
                advert.ToDate = advert.ToDate.ToUniversalTime();

                if (advert.Photo != null)
                {

                    var image = advert.Photo;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Advert_upload_photo/"), advert.ID.ToString() + fileExtension);
                    await image.SaveAsAsync(savingPath);
                    advert.AdPhoto = "Assets/Advert_upload_photo/" + advert.ID + fileExtension;

                }


                await _context.Advertisements.AddAsync(advert);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        public List<Advertisement> GetAll() {

            return _context.Advertisements.ToList();
        }

        public async Task Update(Advertisement advert)
        {
            try
            {

                var adve = _context.Advertisements.Find(advert.ID);

                adve.Name = advert.Name;
                adve.Description = advert.Description;
                adve.FromDate = advert.FromDate;
                adve.ToDate = advert.ToDate;



                if (advert.Photo != null)
                {
                    var image = advert.Photo;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Advert_upload_photo/"), adve.ID.ToString() + fileExtension);

                    if (File.Exists(savingPath))
                    {
                        File.Delete(savingPath);
                    }

                    await image.SaveAsAsync(savingPath);
                    adve.AdPhoto = "Assets/Advert_upload_photo/" + adve.ID + fileExtension;
                }


                _context.Advertisements.Update(adve);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }




        }


        public async Task Delete(Guid advertId)
        {
            try
            {
                var advert = await _context.Advertisements.FindAsync(advertId);
                _context.Advertisements.Remove(advert);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


    }
}
