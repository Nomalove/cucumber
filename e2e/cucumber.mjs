import dotenv from "dotenv"
dotenv.config()
const {env} = process
const QUIET = env.QUIET ==="1"
const PATHS = env.PATHS || "./FEATURE/**/*,{feature,feature,md}";
const REQUIRE = env.REQUIRE || "./features/support/*.{ts,js}";
export default {
    parallel: 2,
    format: ['html:cucumber-report.html'],
    publishQuiet : QUIET,
    paths: [PATHS],
    require :[REQUIRE],
    requireModule:["ts-node/register"],
  }