"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From TWS Batch 4 - You all are awesome!",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
