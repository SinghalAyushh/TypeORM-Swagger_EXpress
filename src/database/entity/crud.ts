import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'todo' }) // table name in database
export class Todo extends BaseEntity {

  @PrimaryGeneratedColumn() //auto generated id
  id: number;

  @Column({ unique: true }) //set task as unique
  task: string;

  @Column({ name: 'created_date' }) //change column name
  createdDate: Date;

  @Column()
  priority: 'high' | 'medium' | 'low'; //only allow enum values of priority

  @Column({ nullable: true }) //allows null value
  done: boolean;

}