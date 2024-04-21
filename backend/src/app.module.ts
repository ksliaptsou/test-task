import { Module } from '@nestjs/common';
import { RepoModule } from './repo/repo.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration, { validationSchema } from './constants/configuration';

@Module({
  imports: [
    RepoModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: validationSchema,
    }),
  ],
})
export class AppModule {}
