const rideSchema = require("./ride.schema");

module.exports = {
  post: {
    tags: ["Rides"],
    parameters: [],
    summary: "create a new ride",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            properties: {
              from: {
                type: "string",
                example: "Delhi, India",
              },
              to: {
                type: "string",
                example: "Jaipur, Rajasthan, India",
              },
              date: {
                type: "string",
              },
              capacity: {
                type: "number",
                example: 8,
              },
              price: {
                type: "string",
                example: "Rs. 900"
              },
              description: {
                type: "string",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Cancel Request to Ride by requestId",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                success: {
                  type: "boolean",
                  example: true,
                },
                message: {
                  type: "string",
                  example: "Successfully cancelled the request",
                },
                ride: {
                  ...rideSchema,
                },
              },
            },
          },
        },
      },
      500: {
        description: "Server could not process the request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                success: {
                  type: "boolean",
                  example: false,
                },
                message: {
                  type: "string",
                  example: "something went wrong while cancelling the request",
                },
              },
            },
          },
        },
      },
    },
  },
};
