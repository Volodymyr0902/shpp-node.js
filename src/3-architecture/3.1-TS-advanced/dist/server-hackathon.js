"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5501",
}));
var Signs;
(function (Signs) {
    Signs[Signs["PLUS"] = 0] = "PLUS";
    Signs[Signs["MINUS"] = 1] = "MINUS";
})(Signs || (Signs = {}));
const clickCounters = {
    plus: Signs.PLUS,
    minus: Signs.PLUS,
};
app.post("/", (req, res) => {
    const { sign } = req.body;
    switch (sign) {
        case Signs.PLUS:
            clickCounters.plus++;
            break;
        case Signs.MINUS:
            clickCounters.minus++;
            break;
    }
    res.json(clickCounters);
});
app.listen(3000, () => {
    console.log(`Server started...`);
});
