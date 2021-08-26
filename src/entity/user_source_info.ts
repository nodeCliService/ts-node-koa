import { Entity, PrimaryGeneratedColumn, Column,OneToMany,ManyToOne ,JoinColumn  } from 'typeorm';
// import user_type_info  from "./2user_type_info";
// import user_users_info  from "./1user_users_info";

@Entity()
export default class user_source_info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", name: "file_path", nullable: true })
  file_path: string;

  @Column({ type: "int", name: "pid", nullable: true })
  pid: string;

  @Column({ type: "varchar", name: "file_path_id", nullable: true })
  file_path_id: string;

  @Column({ type: "varchar", name: "file_size", nullable: true })
  file_size: string;

  @Column({ type: "varchar", name: "file_type", nullable: true })
  file_type: string;

  @Column({ type: "varchar", name: "file_name", nullable: true })
  file_name: string;

  @Column({ type: "varchar", name: "file_url", nullable: true })
  file_url: string;

  @Column({ type: "varchar", name: "file_local_url", nullable: true })
  file_local_url: string;

  @Column({ type: "varchar", name: "file_status", nullable: true })
  file_status: string;

  @Column({ type: "datetime", name: "created_at", nullable: true })
  created_at: string;

  @Column({ type: "datetime", name: "update_at", nullable: true })
  updated_at: string;

  // @ManyToOne(type => user_users_info, user => user.posts)
  // @JoinColumn({name: 'user_id'})
  // user: user_users_info;

  // @OneToMany(type => user_type_info, image => image.id)
  // images: user_type_info[];
}
