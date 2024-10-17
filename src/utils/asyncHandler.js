const asyncHandler = (fnc) => async (req, res, next) => {
  try {
    await fnc(req, res, next);
  } catch (error) {
    next(error);
  }
};

export default asyncHandler;
