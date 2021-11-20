const express = require("express");
const router = express.Router();
const { validation } = require("../../middlewares");
const { authControllers } = require("../../controllers");
const { joiSchema } = require("../../models/user");
router.post("/signup", validation(joiSchema), authControllers.signUp);
router.post("/signin", validation(joiSchema), authControllers.signIn);
router.post("/logout");
router.get("/current");
module.exports = router;
