export const AppSwaggerDefinition = {
  schemas: {
    Status: {
      properties: {
        status: {
          type: 'string',
        },
      },
      required: ['status'],
    },
    ErrorMessage: {
      properties: {
        message: {
          type: 'string',
        },
        statusCode: {
          type: 'integer',
        },
        status: {
          type: 'string',
        },
      },
    },
    ValidateErrorMessage: {
      properties: {
        message: {
          type: 'string',
        },
        statusCode: {
          type: 'integer',
        },
        status: {
          type: 'string',
        },
        errors: {
          type: 'array',
          items: {
            type: 'object',
          },
        },
      },
    },
    StandardMessage: {
      properties: {
        message: {
          type: 'string',
        },
      },
    },
  },
  paths: {
    '/': {
      get: {
        tags: ['App'],
        description: 'API Health Status',
        responses: {
          '200': {
            description: 'Obtain API Health Status',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Status',
                },
              },
            },
          },
        },
      },
    },
  },
};
