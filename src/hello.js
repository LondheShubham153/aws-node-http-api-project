"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From TWS Batch Foure - You all are great & awesome!",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
