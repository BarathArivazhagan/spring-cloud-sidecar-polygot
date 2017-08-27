import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppRouter} from './routes/AppRouter';

class App {
  public express
  
  public router
  

  constructor () {
    this.express = express();
    this.router=express.Router();
    this.express.use(bodyParser.json());
    const port = process.env.PORT || 3000

      this.express.listen(port, (err) => {
                if (err) {
                   return console.log(err)
                  }

  return console.log(`server is listening on ${port}`)
});
   
    let router= new AppRouter();
    router.initializeRoutes( this.express, this.router);
   
  }

  
}




export default new App().express