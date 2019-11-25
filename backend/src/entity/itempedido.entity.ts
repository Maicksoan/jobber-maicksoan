import { ServicoEntity } from './servico.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PedidoEntity } from './pedido.entity';


@Entity({name: 'itempedido'})
export class ItemPedidoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => PedidoEntity, { nullable: false })
    @JoinColumn({name: 'pedido_id'})
    pedido: PedidoEntity;

    @ManyToOne(type => ServicoEntity, { eager: true, nullable: false })
    @JoinColumn({name: 'servico_id'})
    servico: ServicoEntity;

    @Column({type: 'double', nullable: false})
    qtdade: number;

    @Column({type: 'double', nullable: false})
    vlrunit: number;

}