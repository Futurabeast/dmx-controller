import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ChannelDTO } from "../dto/channel.dto";
import { FixtureDTO } from "../dto/fixture.dto";


@Entity()
export class FixtureEntity extends BaseEntity implements FixtureDTO {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column({ type: 'json' })
  channels: ChannelDTO[];


  static fromDTO(dto: Partial<FixtureDTO>) {
    const fixture = new FixtureEntity();

    Object.assign(fixture, dto);
    return fixture;
  }

}