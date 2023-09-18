import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Temperature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  value: number;

  @Column('text') // Use 'text' data type for date and time
  timestamp: string;
}
