import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';
import {
  Body,
  Controller,
  Get,
  Param,
  Post
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FixtureDTO } from './dto/fixture.dto';
import { NewFixtureDTO } from './dto/new-fixture.dto';
import { FixtureEntity } from './entity/fixture.entity';
import { FixtureNotFoundException } from './exceptions/fixture-not-found.exception';

@ApiTags('fixtures')
@Controller('fixtures')
export class FixtureController {

  @Get(':id')
  @ApiOperation({ description: 'Gives a fixture from its id' })
  @ApiOkResponse({ type: FixtureDTO })
  @ApiException(() => [FixtureNotFoundException])
  async getFixture(@Param('id') id: number): Promise<FixtureDTO> {
    try {
    return FixtureDTO.fromEntity(await FixtureEntity.findOneByOrFail({ id }))
    } catch (e) {
      throw new FixtureNotFoundException();
    }
  }

  @Get('/')
  @ApiOperation({ description: 'List all fixtures' })
  @ApiOkResponse({ type: [FixtureDTO] })
  async getFixtures(): Promise<FixtureDTO[]> {
    return (await FixtureEntity.find()).map((fixture) => FixtureDTO.fromEntity(fixture));
  }

  @Post('/')
  @ApiOperation({ description: 'Create a new fixture' })
  @ApiOkResponse({ type: FixtureDTO })
  async postFixture(@Body() newFixture: NewFixtureDTO): Promise<FixtureDTO> {
    const fixture = FixtureEntity.fromDTO(newFixture);

    return await fixture.save()
  }

  
}