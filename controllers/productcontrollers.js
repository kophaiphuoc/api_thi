const {sinhvien} = require(".././models/models");
const sinviencontrollers = {
    getallstudent: async(req, res)=>{
        try {
            const sinhvien_= await sinhvien.find();
            res.status(200).json(sinhvien_);
        } catch (e) {
            res.status(500).json(e);
        }
    },
    // UPDATE A PRODUCT
    updatastudent: async (req, res)=>{
        try {
            const updatesinhvien = await sinhvien.findByIdAndUpdate(req.params.id);
            await updatesinhvien.updateOne({$set:req.body});
            res.status(200).json("update sucsessfully");
        } catch (e) {
            res.status(500).json(e);
        }
    },
}

module.exports = sinviencontrollers;