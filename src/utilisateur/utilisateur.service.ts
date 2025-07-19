import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private readonly utilisateurRepository: Repository<Utilisateur>,
    private jwtService: JwtService
  ){

  }
  
  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const userExiste = await this.utilisateurRepository.findOneBy({email: createUtilisateurDto.email})

    if (userExiste)
      return {message: 'utilisateur existe déjà'}

    const hased = await bcrypt.hash(createUtilisateurDto.mot_de_passe, 10)
    const utilisateur = this.utilisateurRepository.create({...createUtilisateurDto,mot_de_passe: hased})
    await this.utilisateurRepository.save(utilisateur)

    return {message:'enregistrement avec succées'}
  }

  async findAll() {
    return this.utilisateurRepository.find()
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
