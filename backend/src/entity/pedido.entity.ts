import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import { ContratanteEntity } from './contratante.entity';
import { PrestadorEntity } from './prestador.entity';
import { ItemPedidoEntity } from './itempedido.entity';
import { TabelaPrecoEntity } from './tabelapreco.entity';


@Entity({name: 'pedido'})
export class PedidoEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, type: 'date'})
    dtpedido: Date;

    @Column({nullable: true, length: 255})
    observacao: string;

    @ManyToOne(type => TabelaPrecoEntity, { eager: true, nullable: true })
    @JoinColumn({ name: 'tabelapreco_id' })
    tabelapreco: TabelaPrecoEntity;

    @ManyToOne(type => ContratanteEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'contratante_id' })
    cliente: ContratanteEntity;

    @ManyToOne(type => PrestadorEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'prestador_id' })
    vendedor: PrestadorEntity;

    @OneToMany(type => ItemPedidoEntity, item => item.pedido, {eager: true})
    itens: ItemPedidoEntity[];

}