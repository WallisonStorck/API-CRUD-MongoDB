export const swaggerDocument = {
  openapi: "3.0.3",
  info: {
    title: "API CRUD em MongoDB - IGTI",
    description:
      "O projeto é um exemplo de API CRUD simples feita no curso de Desenvolvedor FullStack do Instituto de Gestão da Tecnologia da Informação - IGTI. A API é baseada em notas de aluno de uma universidade.",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "apiteam@swagger.io",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    version: "1.0.11",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  servers: [
    {
      url: "http://localhost:3000/student",
    },
  ],
  tags: [
    {
      name: "student",
      description: "Everything about your students",
      externalDocs: {
        description: "Find out more about our store",
        url: "http://swagger.io",
      },
    },
  ],
  paths: {
    "/student/": {
      get: {
        tags: ["student"],
        summary: "Returns all grades of students",
        description: "Returns all grades of students",
        operationId: "getStudents",
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  additionalProperties: {
                    type: "integer",
                    format: "int32",
                  },
                },
              },
            },
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      post: {
        tags: ["student"],
        summary: "Insert a grade",
        description: "Insert a student's grade",
        operationId: "insertGrade",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
            "application/x-www-form-urlencoded": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Order",
                },
              },
            },
          },
          405: {
            description: "Invalid input",
          },
        },
      },
    },
    "/student/{Id}": {
      patch: {
        tags: ["student"],
        summary: "Update a student's grade",
        description: "",
        operationId: "updateGradeForId",
        parameters: [
          {
            name: "petId",
            in: "path",
            description: "ID of pet that needs to be updated",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "name",
            in: "query",
            description: "Name of pet that needs to be updated",
            schema: {
              type: "string",
            },
          },
          {
            name: "status",
            in: "query",
            description: "Status of pet that needs to be updated",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          405: {
            description: "Invalid input",
          },
        },
        security: [
          {
            petstore_auth: ["write:pets", "read:pets"],
          },
        ],
      },
      delete: {
        tags: ["student"],
        summary: "Delete a student's grade",
        description: "Delete a student's grade for id",
        operationId: "deleteGrade",
        parameters: [
          {
            name: "orderId",
            in: "path",
            description: "ID of the order that needs to be deleted",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          400: {
            description: "Invalid ID supplied",
          },
          404: {
            description: "Order not found",
          },
        },
      },
    },
  },
  // components: {
  //   schemas: {
  //     Order: {
  //       type: "object",
  //       properties: {
  //         // id: {
  //         //   type: "integer",
  //         //   format: "int64",
  //         //   example: 10,
  //         // },
  //         name: {
  //           type: "string",
  //           format: "string",
  //           example: "Wallison",
  //         },
  //         subject: {
  //           type: "string",
  //           format: "string",
  //           example: "NodeJS",
  //         },
  //         type: {
  //           type: "string",
  //           format: "date-time",
  //         },
  //         value: {
  //           type: "string",
  //           description: "Order Status",
  //           example: "approved",
  //           enum: ["placed", "approved", "delivered"],
  //         },
  //         lastModified: {
  //           type: "date",
  //         },
  //       },
  //       xml: {
  //         name: "order",
  //       },
  //     },
  //     Customer: {
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "integer",
  //           format: "int64",
  //           example: 100000,
  //         },
  //         username: {
  //           type: "string",
  //           example: "fehguy",
  //         },
  //         address: {
  //           type: "array",
  //           xml: {
  //             name: "addresses",
  //             wrapped: true,
  //           },
  //           items: {
  //             $ref: "#/components/schemas/Address",
  //           },
  //         },
  //       },
  //       xml: {
  //         name: "customer",
  //       },
  //     },
  //     Address: {
  //       type: "object",
  //       properties: {
  //         street: {
  //           type: "string",
  //           example: "437 Lytton",
  //         },
  //         city: {
  //           type: "string",
  //           example: "Palo Alto",
  //         },
  //         state: {
  //           type: "string",
  //           example: "CA",
  //         },
  //         zip: {
  //           type: "string",
  //           example: "94301",
  //         },
  //       },
  //       xml: {
  //         name: "address",
  //       },
  //     },
  //     Category: {
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "integer",
  //           format: "int64",
  //           example: 1,
  //         },
  //         name: {
  //           type: "string",
  //           example: "Dogs",
  //         },
  //       },
  //       xml: {
  //         name: "category",
  //       },
  //     },
  //     User: {
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "integer",
  //           format: "int64",
  //           example: 10,
  //         },
  //         username: {
  //           type: "string",
  //           example: "theUser",
  //         },
  //         firstName: {
  //           type: "string",
  //           example: "John",
  //         },
  //         lastName: {
  //           type: "string",
  //           example: "James",
  //         },
  //         email: {
  //           type: "string",
  //           example: "john@email.com",
  //         },
  //         password: {
  //           type: "string",
  //           example: "12345",
  //         },
  //         phone: {
  //           type: "string",
  //           example: "12345",
  //         },
  //         userStatus: {
  //           type: "integer",
  //           description: "User Status",
  //           format: "int32",
  //           example: 1,
  //         },
  //       },
  //       xml: {
  //         name: "user",
  //       },
  //     },
  //     Tag: {
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "integer",
  //           format: "int64",
  //         },
  //         name: {
  //           type: "string",
  //         },
  //       },
  //       xml: {
  //         name: "tag",
  //       },
  //     },
  //     Pet: {
  //       required: ["name", "photoUrls"],
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "integer",
  //           format: "int64",
  //           example: 10,
  //         },
  //         name: {
  //           type: "string",
  //           example: "doggie",
  //         },
  //         category: {
  //           $ref: "#/components/schemas/Category",
  //         },
  //         photoUrls: {
  //           type: "array",
  //           xml: {
  //             wrapped: true,
  //           },
  //           items: {
  //             type: "string",
  //             xml: {
  //               name: "photoUrl",
  //             },
  //           },
  //         },
  //         tags: {
  //           type: "array",
  //           xml: {
  //             wrapped: true,
  //           },
  //           items: {
  //             $ref: "#/components/schemas/Tag",
  //           },
  //         },
  //         status: {
  //           type: "string",
  //           description: "pet status in the store",
  //           enum: ["available", "pending", "sold"],
  //         },
  //       },
  //       xml: {
  //         name: "pet",
  //       },
  //     },
  //     ApiResponse: {
  //       type: "object",
  //       properties: {
  //         code: {
  //           type: "integer",
  //           format: "int32",
  //         },
  //         type: {
  //           type: "string",
  //         },
  //         message: {
  //           type: "string",
  //         },
  //       },
  //       xml: {
  //         name: "##default",
  //       },
  //     },
  //   },
  //   requestBodies: {
  //     Pet: {
  //       description: "Pet object that needs to be added to the store",
  //       content: {
  //         "application/json": {
  //           schema: {
  //             $ref: "#/components/schemas/student",
  //           },
  //         },
  //         "application/xml": {
  //           schema: {
  //             $ref: "#/components/schemas/student",
  //           },
  //         },
  //       },
  //     },
  //     UserArray: {
  //       description: "List of user object",
  //       content: {
  //         "application/json": {
  //           schema: {
  //             type: "array",
  //             items: {
  //               $ref: "#/components/schemas/User",
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  //   securitySchemes: {
  //     petstore_auth: {
  //       type: "oauth2",
  //       flows: {
  //         implicit: {
  //           authorizationUrl:
  //             "https://studentstore3.swagger.io/oauth/authorize",
  //           scopes: {
  //             "write:pets": "modify pets in your account",
  //             "read:pets": "read your pets",
  //           },
  //         },
  //       },
  //     },
  //     api_key: {
  //       type: "apiKey",
  //       name: "api_key",
  //       in: "header",
  //     },
  //   },
  // },
};
