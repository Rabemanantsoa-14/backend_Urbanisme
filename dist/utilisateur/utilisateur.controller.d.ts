import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
export declare class UtilisateurController {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/utilisateur.entity").Utilisateur[]>;
    findOne(id: string): any;
    update(id: string, updateUtilisateurDto: UpdateUtilisateurDto): string;
    remove(id: string): string;
}
