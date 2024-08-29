import { TCards } from './cards.interface';
import { CardModal } from './cards.module';

const createCardIntoDB = async (card: TCards) => {
  const result = await CardModal.create(card);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllCard = async (query: any) => {
  if (query) {
    // const searchRegex = new RegExp(query, 'i');
    return await CardModal.find({ title: query });
  }
  const result = await CardModal.find();
  return result;
};

const getSingleCard = async (title: string) => {
  const result = await CardModal.findOne({ title });
  return result;
};
const deleteCard = async (title: string) => {
  const result = await CardModal.deleteOne({ title });
  return result;
};
export const cardService = {
  createCardIntoDB,
  getAllCard,
  getSingleCard,
  deleteCard,
};
