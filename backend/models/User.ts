import Mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  password: string;
  name: string;
  receivesEmails: boolean,
  balance: number,
  cart: string,
  adresse:string
  is_admin: boolean;
 
}

const UserSchema: Schema<UserDocument> = new Schema({
  email: String,
  password: String,
  name: String,
  receivesEmails: Boolean,
  balance: Number,
  cart: String,
  adresse:String ,
  is_admin: { type: Boolean },
});


export const User = Mongoose.model<UserDocument>('User', UserSchema);
