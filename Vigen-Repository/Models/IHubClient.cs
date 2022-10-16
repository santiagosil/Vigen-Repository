namespace Vigen_Repository.Models
{
    public interface IHubClient
    {
        Task recibeNotify(Notify notify);
    }
}
