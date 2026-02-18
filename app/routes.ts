import { type RouteConfig, index } from "@react-router/dev/routes";
import { createBrowserRouter } from "react-router";

// export default [index("routes/home.tsx")] satisfies RouteConfig;


export default [
  {
    path: "/",
    file: "routes/layout.tsx",       
    children: [
      index("routes/home.tsx"),            
      { path: "dashboard",file: "routes/dashboard.tsx", children: [ index("routes/dashboard.tsx") ] }, // /dashboard
      { path: "transactions",file: "routes/transactions.tsx", children: [ index("routes/transactions.tsx") ] }, // /transactions
      { path: "about", file: "routes/about.tsx", children: [ index("routes/about.tsx") ] }, // /about
    ],
  },
] satisfies RouteConfig;



