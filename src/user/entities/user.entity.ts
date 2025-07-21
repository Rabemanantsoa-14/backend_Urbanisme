import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
        id: number
    
        @Column()
        nom_prenom: string
    
        @Column()
        email: string
    
        @Column()
        telephone: string
    
        @Column()
        mot_de_passe: string
    
        @Column()
        role: string
}
