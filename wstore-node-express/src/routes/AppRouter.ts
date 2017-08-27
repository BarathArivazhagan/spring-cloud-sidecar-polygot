import * as express from 'express'

class AppRouter{
  
  
  
  constructor() {
   
   
  }
  
  public  initializeRoutes(express : express ,router : express.Router): void{
    
        
        console.log("router is getting configured");
        router.get('/', (req, res) => {
          res.json({
            message: 'WELCOME TO WALMART NODE EXPRESS APPLICATION !'
          });
        });  
        express.use('/',router);
  }
  
  
  
}

export {AppRouter};