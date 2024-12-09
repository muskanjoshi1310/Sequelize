
import { Sequelize } from "sequelize";
const sequelize = new Sequelize("testsequelize","root","",{
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});
sequelize.authenticate()
.then(()=>{
    console.log("Databse connected...");
}).catch(err=>{
    console.log("Error...");
});
export default sequelize;