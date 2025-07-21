import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UtilisateurService {
    private readonly utilisateurRepository;
    private jwtService;
    constructor(utilisateurRepository: Repository<Utilisateur>, jwtService: JwtService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<Utilisateur[]>;
    update(id: number, updateUtilisateurDto: UpdateUtilisateurDto): string;
    remove(id: number): string;
}
