using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace auction.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuctionController : ControllerBase
    {

        private readonly ILogger<AuctionController> _logger;

        public AuctionController(ILogger<AuctionController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        public IEnumerable<AuctionResponse> Post([FromBody] IEnumerable<AuctionResponse> requests)
        {

            foreach (var request in requests)
            {
                request.Price = request.Price + request.BidPrice;
            }

            return requests;
        }


    }
}
