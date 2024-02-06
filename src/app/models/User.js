import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const UserSchema = new Schema(
  {
    name:{type:String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tel:{type:String, unique:true},
    address:{type:String},
    postal:{type:String},
    city:{type:String},
    country:{type:String},

  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = bcrypt.genSaltSync(saltRounds);
  user.password = bcrypt.hashSync(user.password, salt);

  next();
});

export const User = models?.User || model("User", UserSchema);
