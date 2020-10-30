const response = {
  success: (
    req,
    res,
    status = 200,
    message = 'Done Succesfully',
    data = []
  ) => {
    res.status(status).json({
      message,
      data,
    });
  },

  error: (req, res, status = 500, message = 'There was an error', error) => {
    console.log(error);
    res.status(status).json({
      error: message,
    });
  },
};

export default response;
