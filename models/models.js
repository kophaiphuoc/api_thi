const mongosee = require('mongoose');
const sinhvienshecma = new mongosee.Schema(
    {
        masv:{
            type: Number,
            required: true
        },
        hoten:{
            type: String,
            required: true
        },
        diemjava:{
            type: Number,
            required: true
        },
        diemhtml:{
            type: Number,
            required: true
        },

    },

);

let sinhvien = mongosee.model("sinhvien",sinhvienshecma);
module.exports = {sinhvien};