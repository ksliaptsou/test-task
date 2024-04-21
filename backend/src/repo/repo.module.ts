import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';

import { RepoController } from './repo.controller';
import { RepoService } from './repo.service';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [RepoController],
  providers: [RepoService],
})
export class RepoModule {}
