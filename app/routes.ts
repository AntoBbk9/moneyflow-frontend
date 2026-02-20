// import { type RouteConfig, index } from "@react-router/dev/routes";
// import { createBrowserRouter } from "react-router";

// // export default [index("routes/home.tsx")] satisfies RouteConfig;


// export default [
//   {
//     path: "/",
//     file: "routes/layout.tsx",       
//     children: [
//       index("routes/home.tsx"),            
//       { path: "transactions",file: "routes/transactions.tsx", children: [ index("routes/transactions.tsx") ] }, // /transactions
//       { path: "about", file: "routes/about.tsx", children: [ index("routes/about.tsx") ] }, // /about
//     ],
//   },
// ] satisfies RouteConfig;



import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/layout.tsx", [
    index("routes/home.tsx"),
    route("transactions", "routes/transactions.tsx"),
    // route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
