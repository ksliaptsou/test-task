import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { AuthGuard } from '../common/guards/auth.guard';
import { APITokenStrategy } from './strategies/api-token.strategy';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    APITokenStrategy,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
