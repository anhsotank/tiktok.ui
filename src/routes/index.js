import Home from "~/pages/Home";
import Following from "~/pages/Following";
const publicroutes=[
    {path:'/',component:Home},
    {path:'/following',component:Following},
];
const privateroutes = [];
export {publicroutes,privateroutes};