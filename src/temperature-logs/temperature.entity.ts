import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Temperature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'real', nullable: true })
  celsius: number;

  @Column({ type: 'real', nullable: true })
  fahrenheit: number;

  @Column({ type: 'date', nullable: true })
  timestamp: Date;
}
