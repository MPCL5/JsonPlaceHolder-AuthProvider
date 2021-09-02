const HttpErros = {
  UNAUTHORIZED: "UNAUTHORIZED",
  UNPROCESSABLE_ENTITY: "UNPROCESSABLE_ENTITY",
};

/**
 *
 * @param {import("express").Response} res
 * @returns
 */
const errorSender = (res) => (type, message) => {
  let statusCode = 500;
  const result = { success: false, message: "مشکلی به وجود آمده است." };

  switch (type) {
    case HttpErros.UNAUTHORIZED:
      statusCode = 401;
      result.message = "نشست شما باطل شده است. لطفا دوباره وارد شوید.";
      break;

    case HttpErros.UNPROCESSABLE_ENTITY:
      statusCode = 422;
      result.message = "لطفا ورودی‌ها را کنترل کنید.";
      break;

    default:
      break;
  }

  if (!!message) {
    result.message = message;
  }

  return res.status(statusCode).json(result);
};

const errorHandler = () => {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  return (_, res, next) => {
    res.sendError = errorSender(res);
    next();
  };
};

exports.errorHandler = errorHandler;
exports.HttpErros = HttpErros;
