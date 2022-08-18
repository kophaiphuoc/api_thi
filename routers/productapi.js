const router = require("express").Router();
const sinhviencontrollers = require(".././controllers/productcontrollers");

router.get("/allstudent",sinhviencontrollers.getallstudent);;
router.put("/:id",sinhviencontrollers.updatastudent);

module.exports = router;