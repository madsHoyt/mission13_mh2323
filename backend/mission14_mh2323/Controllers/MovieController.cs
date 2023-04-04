using Microsoft.AspNetCore.Mvc;
using mission14_mh2323.data;

namespace mission14_mh2323.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieCollectionContext context;
        public MovieController(MovieCollectionContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();
            return x;
        }

    }
}

