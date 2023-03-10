
using tmretApi.Entities;
namespace tmretApi.Services{


    public interface IDegafiSettingRepository {


        Task Create(DegafiSetting desetting);

        Task Update(DegafiSetting desetting);

        List<DegafiSetting> GetAll(Guid userId);
        Task Delete(Guid advertId);
    }
}