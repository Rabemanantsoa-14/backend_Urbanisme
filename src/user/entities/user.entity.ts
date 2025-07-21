import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
        id: number
    
        @Column({nullable: false})
        nom_prenom: string
    
        @Column({unique:true, nullable:false})
        email: string
    
        @Column({unique: true, nullable: false})
        telephone: string
    
        @Column({nullable: false})
        mot_de_passe: string
    
        @Column({nullable: false})
        role: string
}
