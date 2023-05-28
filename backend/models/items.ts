import { Document, Schema, model } from 'mongoose';

interface Items extends Document {
  image: string;
  name: string;
  price: string;
  desc: string;
  gen: 'men' | 'women' | 'kid';
}

const ItemSchema = new Schema<Items>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  gen: {
    type: String,
    enum: ['men', 'women', 'kid'],
    required: true,
  },
});

const ItemModel = model<Items>('Item', ItemSchema);

export default ItemModel;
