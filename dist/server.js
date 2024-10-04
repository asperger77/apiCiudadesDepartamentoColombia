"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("./Application");
const app = new Application_1.Application();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3009;
app.start(PORT).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
