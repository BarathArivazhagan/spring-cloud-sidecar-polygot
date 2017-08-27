"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppRouter {
    constructor() {
    }
    initializeRoutes(express, router) {
        console.log("router is getting configured");
        router.get('/', (req, res) => {
            res.send('WELCOME TO WALMART NODE EXPRESS APPLICATION !');
        });
        router.get('/health', (req, res) => {
            console.log("Health json is called ");
            res.json({ "status": "UP" });
        });
        express.use('/', router);
    }
}
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map