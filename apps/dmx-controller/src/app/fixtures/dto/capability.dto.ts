import { ApiProperty } from "@nestjs/swagger";


export class CapabilityDTO {
  
  @ApiProperty()
  name: string;

  @ApiProperty()
  start: number;
  
  @ApiProperty()
  end: number;
}