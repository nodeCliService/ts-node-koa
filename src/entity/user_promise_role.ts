import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class user_promise_role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", name: "u_name", nullable: true })
  u_name: string;

  @Column({ type: "int", name: "u_role", nullable: true })
  u_role: string;

  @Column({ type: "varchar", name: "u_path", nullable: true })
  u_path: string;

  @Column({ type: "varchar", name: "u_id", nullable: true })
  u_id: string;

  @Column({ type: "varchar", name: "file_id", nullable: true })
  file_id: string;


  @Column({ type: "datetime", name: "created_at", nullable: true })
  created_at: string;

  @Column({ type: "datetime", name: "update_at", nullable: true })
  updated_at: string;
}
