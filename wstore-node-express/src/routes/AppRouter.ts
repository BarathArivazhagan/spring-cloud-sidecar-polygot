import * as express from 'express'

class AppRouter{
  
  
  
  constructor() {
   
   
  }
  
  public  initializeRoutes(express : express ,router : express.Router): void{
    
        
        console.log("router is getting configured");
        router.get('/home', (req, res) => {
          res.send('WELCOME TO WALMART NODE EXPRESS APPLICATION !');
        
        });  
    
         router.get('/health', (req, res) => {
           
          console.log("Health json is called ");
          res.json({"status":"UP"});
        
        });  
        express.use('/',router);
  }
  
  
  
}

export {AppRouter};