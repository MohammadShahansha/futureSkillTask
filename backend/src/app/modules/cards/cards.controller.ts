import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendRespnse';
import { cardService } from './cards.service';
import httpStatus from 'http-status';

const createCardIntoDB = catchAsinc(async (req, res) => {
  const result = await cardService.createCardIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card created successfully',
    data: result,
  });
});
const getAllCard = catchAsinc(async (req, res) => {
  const query = req.query.query;
  //   console.log(query);
  const result = await cardService.getAllCard(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card retrive successfully',
    data: result,
  });
});
const getSingleCard = catchAsinc(async (req, res) => {
  const { title } = req.params;
  const result = await cardService.getSingleCard(title);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single card retrive successfully',
    data: result,
  });
});
const deleteCard = catchAsinc(async (req, res) => {
  const { title } = req.params;

  const result = await cardService.deleteCard(title);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'delete card successfully',
    data: result,
  });
});

export const cardController = {
  createCardIntoDB,
  getAllCard,
  getSingleCard,
  deleteCard,
};
