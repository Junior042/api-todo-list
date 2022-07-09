import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./modelUser";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    isConcluded: boolean

    @ManyToOne(() => User, (user) => user.products, {
        onDelete: "CASCADE"
    })
    user: User
};