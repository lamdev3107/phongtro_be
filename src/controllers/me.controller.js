import * as meService from "../services/me.service";

export const getMyPosts = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const status = req.query.status;
    const sortBy = req.query.sortBy;
    const sort = req.query.sort;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const keyword = req.query.keyword || null;

    const data = await meService.getMyPostsService(
      userId,
      sortBy,
      sort,
      page,
      limit,
      status,
      keyword
    );
    return res.status(200).json({
      success: true,
      message: "Get my posts successfully!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getMyPostPayments = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const data = await meService.getMyPostPaymentsService(userId, page, limit);
    return res.status(200).json({
      success: true,
      message: "Get my post payments successfully!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getMyAccount = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = await meService.getMyAccountService(userId);
    return res.status(200).json({
      success: true,
      message: "Get my account successfully!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const updateMyAccount = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = req.body;
    const avatar = req.file?.path;
    if (avatar) {
      data.avatar = avatar;
    }
    const updatedAccount = await meService.updateMyAccountService(userId, data);
    return res.status(200).json({
      success: true,
      message: "Update my account successfully!",
      data: updatedAccount,
    });
  } catch (err) {
    next(err);
  }
};
