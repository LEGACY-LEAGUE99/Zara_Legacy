
import { Schema, model, Document } from 'mongoose';

interface Help extends Document {
  title: string;
  question: string;
  answer: string;
}

const helpSchema = new Schema<Help>({
  title: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const Help = model<Help>('Help', helpSchema);

export default Help;
