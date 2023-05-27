
import { Schema, model, Document } from 'mongoose';

interface Help extends Document {
  topic : string ;
  title: string;
  question: string;
  answer: string;
}

const helpSchema = new Schema<Help>({
  topic: { type: String, required: true },
  title: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const Help = model<Help>('Help', helpSchema);

export default Help;
