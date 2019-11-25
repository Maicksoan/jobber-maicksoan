import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity({name: 'servico'})
export class ServicoEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: true, length: 255})
    descricao: string;

    @Column({nullable: true, type: 'double'})
    preco: number;

}