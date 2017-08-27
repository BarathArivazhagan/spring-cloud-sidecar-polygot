"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const AppRouter_1 = require("./routes/AppRouter");
class App {
    constructor() {
        this.express = express();
        this.router = express.Router();
        this.express.use(bodyParser.json());
        const port = process.env.PORT || 3000;
        this.express.listen(port, (err) => {
            if (err) {
                return console.log(err);
            }
            return console.log(`server is listening on ${port}`);
        });
        let router = new AppRouter_1.AppRouter();
        router.initializeRoutes(this.express, this.router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map