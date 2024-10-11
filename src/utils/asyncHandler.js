const asyncHandler = (fnc) => async (req, res, next) => {
  try {
    await fnc(req, res, next);
  } catch (error) {
    res.status(error).js;
  }
};

//  Another pattern used to wrap asynchronous code (like API routes) with a unified error handling approach

// const secondAsyncHandler = (reqHandler) => {
//   (req, res, next) => {
//     Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
//   };
// };

export { asyncHandler };
