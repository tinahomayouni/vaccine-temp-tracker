import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Temperature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  value: number;

  @Column({ type: 'date', nullable: true })
  timestamp: Date;
}
