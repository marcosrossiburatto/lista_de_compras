import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @UpdateDateColumn({ name: 'updated at', type: 'timestamptz', default: () => 'CURRENTE_TIMESTAMP'})
    updatedAt: Date;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'description', type: 'varchar', nullable: true, length: 255 })
    description?: string;

    @Column({ name: 'quantity', type: 'int' })
    quantity: number;

}