module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      fullname: {
        type: String,
        required: true,
        min: 2,
        max: 225,
      },
      email: {
        type: String,
        required: true,
        min: 3,
        max: 225,
      },
      password: {
        type: String,
        required: true,
        min: 3,
        max: 1024,
      },
      token: String,
      status: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
