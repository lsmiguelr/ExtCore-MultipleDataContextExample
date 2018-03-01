﻿// Copyright © 2015 Dmitry Sikorsky. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using WebApplication.ExtensionB.Data.Entities;

namespace WebApplication.ExtensionB.ViewModels.Shared
{
  public class ItemBViewModelFactory
  {
    public ItemBViewModel Create(ItemB item)
    {
      return new ItemBViewModel()
      {
		  Id = item.Id,
		  Name = item.Name,
		  HelloThere = item.HelloThere
      };
    }
  }
}