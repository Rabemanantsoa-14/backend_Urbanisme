"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    userRepository;
    jwtService;
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const existingUser = await this.userRepository.findOneBy({ email: createUserDto.email });
        if (existingUser)
            return { Message: "L' utilisateur existe déjà" };
        const hashed = await bcrypt.hash(createUserDto.mot_de_passe, 10);
        const user = this.userRepository.create({ ...createUserDto, mot_de_passe: hashed });
        await this.userRepository.save(user);
        return { message: 'Enregistrement avec succées' };
    }
    async login(loginUserDto) {
        const userExiste = await this.userRepository.findOneBy({ email: loginUserDto.email });
        if (!userExiste)
            throw new common_1.UnauthorizedException("Identifiant incorrect");
        const match = await bcrypt.compare(loginUserDto.mot_de_passe, userExiste.mot_de_passe);
        if (!match)
            throw new common_1.UnauthorizedException("mot de passe incorrect");
        const payload = { sub: userExiste.id, email: userExiste.email };
        const token = await this.jwtService.signAsync(payload);
        return { access_token: token };
    }
    async findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            return { message: 'Utilisateur introuvable' };
        }
        Object.assign(user, updateUserDto);
        const updatedUser = await this.userRepository.save(user);
        return {
            message: 'Modification avec succès',
            user: updatedUser,
        };
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map