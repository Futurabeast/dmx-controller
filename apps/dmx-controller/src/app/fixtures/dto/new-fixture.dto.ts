import { ApiProperty } from "@nestjs/swagger";
import { ChannelDTO } from "./channel.dto";


export class NewFixtureDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  icon?: string;

  @ApiProperty({ type: [ChannelDTO] })
  channels: ChannelDTO[];
}