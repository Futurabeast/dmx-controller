import { ApiProperty } from "@nestjs/swagger";
import { CapabilityDTO } from "./capability.dto";


export class ChannelDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: 'dimmer' | 'strobe' | 'gobo'
  
  @ApiProperty({ type: [CapabilityDTO] })
  capabilities: CapabilityDTO[]

}