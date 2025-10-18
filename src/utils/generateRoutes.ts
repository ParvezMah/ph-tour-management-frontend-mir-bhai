import { ISidebarItem } from "@/types";

export const generatesRoutes = (sidebarItems : ISidebarItem[]) => {
    return sidebarItems.flatMap((section)=> 
      section.items.map((route)=> ({
        path: route.url,
        Component: route.component,
    }))
  )
};