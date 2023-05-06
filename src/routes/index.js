import { HeaderOnly } from "~/components/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Update from "~/pages/Update";
const publicroutes=[
    {path:'/',component:Home},
    {path:'/following',component:Following},
    {path:'/update',component:Update,layout:HeaderOnly},
];
const privateroutes = [];
export {publicroutes,privateroutes};