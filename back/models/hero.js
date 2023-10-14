const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    real_name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: [String],
      required: true,
    },
    catch_phrase: {
      type: String,
      required: false,
      maxlength: 100,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", heroSchema);
