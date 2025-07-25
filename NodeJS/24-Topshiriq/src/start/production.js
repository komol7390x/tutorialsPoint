import helmet from "helmet";
import comprasion from 'compression'

export default  production=async (app)=>{
    app.use(helmet());
    app.use(comprasion());
}