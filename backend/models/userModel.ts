import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
  balance: number;
  cart: CartItem[];
  adresse: string;
  is_admin: boolean;
  checkPassword(password: string): boolean;
}

interface CartItem {
  name: string;
  quantity: number;
}

const cartItemSchema = new mongoose.Schema<CartItem>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new mongoose.Schema<UserDocument>(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, required: false },
    cart: { type: [cartItemSchema], required: false },
    adresse: { type: String, required: false },
    is_admin: { type: Boolean },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model<UserDocument>("user", userSchema);
export default User;
