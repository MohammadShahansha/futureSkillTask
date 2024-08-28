import { model, Schema } from 'mongoose';
import { TCards } from './cards.interface';

const cardSchema = new Schema<TCards>(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CardModal = model<TCards>('card', cardSchema);
