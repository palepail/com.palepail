using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(palepail.Startup))]
namespace palepail
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
