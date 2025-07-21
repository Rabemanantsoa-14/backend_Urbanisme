import { Injectable, UnauthorizedException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class UserService {

  constructor (
    @InjectRepository(User)
    private readonly userRepository : Repository<User>,
    private jwtService: JwtService
  ){
    
  }

  //creation d'un utilisateur
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOneBy({email: createUserDto.email})

    if (existingUser)
      return{ Message: "L'utilisateur existe déjà" }

    const hashed = await bcrypt.hash(createUserDto.mot_de_passe, 10)

    const user = this.userRepository.create({ 
      ...createUserDto, 
      mot_de_passe: hashed
    })

    await this.userRepository.save(user)

    return {message: 'Enregistrement avec succées'}
  }

  //login
  async login(loginUserDto: LoginUserDto){

    const {identifiant, mot_de_passe} = loginUserDto
    const userExiste = await this.userRepository.findOne
    ({
      where:[
        {email: identifiant},
        {telephone: identifiant }
      ]
    })

    if(!userExiste)
      throw new UnauthorizedException("Identifiant incorrect")

    const match = await bcrypt.compare(mot_de_passe, userExiste.mot_de_passe)
    if(!match)
      throw new UnauthorizedException("mot de passe incorrect")

    const payload = {sub: userExiste.id, email: userExiste.email}
    const token = await this.jwtService.signAsync(payload)

    return {access_token: token}
  }

  async findAll() {
    return this.userRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id })

    if (!user) {
      return { message: 'Utilisateur introuvable' }
    }

    Object.assign(user, updateUserDto)

    const updatedUser = await this.userRepository.save(user)

    return {
      message: 'Modification avec succès',
      user: updatedUser,
    }
}


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
