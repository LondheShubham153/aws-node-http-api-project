"use strict";
const AWS = require("aws-sdk");

const kaamHatao = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    await dynamoDb.delete({
      TableName: "KaamKaro",
      Key: { id },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Kaam Hataya Gaya" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Internal Server Error" }),
    };
  }
};

module.exports = {
  handler: kaamHatao,
};
