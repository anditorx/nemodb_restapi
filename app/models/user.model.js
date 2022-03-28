module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      fullname: String,
      email: String,
      password: String,
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