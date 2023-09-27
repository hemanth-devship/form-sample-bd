var mongoose = require("mongoose");

var config_register_schema = require("../schema/register.schema");
var config_todo_schema = require("../schema/register.schema");

var registerSchema = mongoose.Schema(config_register_schema, {
  timestamps: true,
  versionKey: false,
});
var todoSchema = mongoose.Schema(config_todo_schema, {
  timestamps: true,
  versionKey: false,
});

registerSchema.pre("save", async function (next) {
  this.updatedAt = Date.now();
  next();
});

var register = mongoose.model("Users", registerSchema);
// var todo = mongoose.model("Todo", todoSchema);

module.exports = {
  register: register,
  // todo: todo,
};
