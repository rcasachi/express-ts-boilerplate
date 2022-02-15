export const UsersSwaggerDefinition = {
  schemas: {
    User: {
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
      required: ['email', 'password'],
    },
  },
  paths: {
    '/users': {
      post: {
        tags: ['Users'],
        summary: 'Save new User',
        description: 'Set new user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/StandardMessage',
                },
              },
            },
          },
          '400': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ValidateErrorMessage',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorMessage',
                },
              },
            },
          },
        },
      },
    },
  },
};
