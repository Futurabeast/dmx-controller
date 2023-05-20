import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FixtureEntity } from "./entity/fixture.entity";
import { FixtureController } from "./fixture.controller";

@Module({
  imports: [TypeOrmModule.forFeature([FixtureEntity])],
  controllers: [FixtureController],
})
export class FixtureModule {}