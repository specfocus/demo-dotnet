using System.Security.Claims;

namespace FrontEnd
{
    public class GraphQLUserContext
    {
        public ClaimsPrincipal User { get; set; }
    }
}
