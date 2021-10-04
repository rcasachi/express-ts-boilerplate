import { AppRoute } from './app.route';
import { Module } from './core/package/module/module.interface';
import { UsersModule } from './users/users.module';

export const AppModule: Module = {
  imports: [UsersModule],
  routes: [AppRoute],
  providers: [],
};
