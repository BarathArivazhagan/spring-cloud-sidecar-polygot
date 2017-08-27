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
        express.use('/', router);
    }
}
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map