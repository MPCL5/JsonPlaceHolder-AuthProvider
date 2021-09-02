/**
 *
 * @param {import("express").Response} res
 * @returns
 */
const responseSender =
  (res) =>
  (data, status = 200) => {
    return res.status(status).json({
      success: true,
      data,
      message: "عملیات موفقیت آمیز.",
    });
  };

const responseHandler = () => {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  return (_, res, next) => {
    res.sendOK = responseSender(res);
    next();
  };
};

exports.responseHandler = responseHandler;
