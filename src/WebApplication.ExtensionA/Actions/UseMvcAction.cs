﻿// Copyright © 2017 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using ExtCore.Mvc.Infrastructure.Actions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;

namespace ExtensionA.Actions
{
  public class UseMvcAction : IUseMvcAction
  {
    public int Priority => 1000;

    public void Execute(IRouteBuilder routeBuilder, IServiceProvider serviceProvider)
    {
      routeBuilder.MapRoute(name: "ExtensionA_AItems", template: "", defaults: new { controller = "ExtensionA", action = "Index" });
      routeBuilder.MapRoute(name: "ExtensionA_BItems", template: "", defaults: new { controller = "ExtensionA", action = "IndexB" });

		// Default MVC route (fallback)
		routeBuilder.MapRoute(name: "Default", template: "{controller=ExtensionA}/{action=Index}/{id?}");

		}
  }
}