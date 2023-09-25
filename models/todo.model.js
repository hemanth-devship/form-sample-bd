const mongoose = require('mongoose');
// name, url0: "", file0: null, base: "", status0: true
const TodoSubSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Name is required"],
        // min: 1,
    },
    url: {
        type: String,
        // required: [true, "Name is required"],
        // min: 1,
    },
    file: {
        type: String,
        // required: [true, "Name is required"],
        // min: 1,
    },
    status: {
        type: Boolean,
        default: true,
    },
    // date: {
    //     type: Date,
    //     required: [true, "Todo Date is required"],
    // },
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Users',
    // },
    // updatedAt: {
    //     type: Date,
    //     default: () => new Date(),
    // },
    // createdAt: {
    //     type: Date,
    //     immutable: true,
    //     default: () => new Date(),
    // }
});

// TodoSchema.pre("save", async function(next) {
//     this.updatedAt = Date.now();
//     next();
// })

// const TodoSchema = new mongoose.Schema({
//     todos: [TodoSubSchema]
//   });

module.exports = mongoose.model("Todo", TodoSubSchema);