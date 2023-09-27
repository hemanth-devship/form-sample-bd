let todoSchema = {
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
};

export default todoSchema;
