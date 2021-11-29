using System;

namespace auction
{
    public class AuctionResponse
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string EndDate { get; set; }

        public int Price { get; set; }

        public int BidPrice { get; set; }

        public string UserId { get; set; }

    }
}
