﻿using System;
using Microsoft.AspNetCore.Http;

namespace FrontEnd
{
    public class GraphQLSettings
    {
        public PathString Path { get; set; } = "/api/graphql";
        public Func<HttpContext, object> BuildUserContext { get; set; }
    }
}
