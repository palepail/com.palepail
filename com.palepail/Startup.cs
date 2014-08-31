using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(com.palepail.Startup))]
namespace com.palepail
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
