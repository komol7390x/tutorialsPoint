import helmet from "helmet";
import comprasion from 'compression'

const  production=(app)=>{
    app.use(helmet());
 app.use(comprasion());
}

export default production