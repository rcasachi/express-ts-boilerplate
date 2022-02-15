import { AppModule } from '../../app.module';

export const swagger = {
  jsonRoute: '/docs/swagger.json',
  mainModule: AppModule,
  applicationTitle: 'OpenAPI Documentation',
  applicationVersion: '1.0.0',
  applicationDescription: 'This is an example of api description',
};
