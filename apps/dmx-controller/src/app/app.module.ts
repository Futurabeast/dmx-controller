import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FixtureModule } from './fixtures/fixture.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dmx-controller',
      password: '123456',
      database: 'dmx-controller',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    FixtureModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
