import Chance from "chance";
const chance=Chance()

export const fekUserData=()=>{
   return chance.name({middle:true})
}