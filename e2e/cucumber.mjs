 import dotenv from "dotenv"

dotenv.config()
const {env} = process
const QUIET = env.QUIET ==="1"
 const PATHS = env.PATHS || "./features/**/*,{feature,feature,md}";
 const REQUIRE = env.REQUIRE || "./step-definitions/*.{ts,js}";
 export default {
     parallel: 2,
     format: ['html:cucumber-report.html'],
     publishQuiet : QUIET,
     paths: [PATHS],
     require :[REQUIRE],
     requireModule:["ts-node/register"],
   }