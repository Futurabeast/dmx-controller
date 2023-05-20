import { ApiProperty } from "@nestjs/swagger";
import { FixtureEntity } from "../entity/fixture.entity";
import { ChannelDTO } from "./channel.dto";


export class FixtureDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  icon: string;

  @ApiProperty({ type: [ChannelDTO] })
  channels: ChannelDTO[];

  static fromEntity(entity: FixtureEntity) {
    const fixture = new FixtureDTO();
    fixture.id = entity.id;
    fixture.name = entity.name;
    fixture.icon = entity.icon;
    fixture.channels = entity.channels;
    return fixture;
  }
}