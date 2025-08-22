import * as meService from "../services/me.service";

export const getMyPostPayments = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const status = req.query.status || null;
    const response = await meService.getMyPostsService(userId, status);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
