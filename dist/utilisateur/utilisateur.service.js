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
exports.UtilisateurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utilisateur_entity_1 = require("./entities/utilisateur.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let UtilisateurService = class UtilisateurService {
    utilisateurRepository;
    jwtService;
    constructor(utilisateurRepository, jwtService) {
        this.utilisateurRepository = utilisateurRepository;
        this.jwtService = jwtService;
    }
    async create(createUtilisateurDto) {
        const userExiste = await this.utilisateurRepository.findOneBy({ email: createUtilisateurDto.email });
        if (userExiste)
            return { message: 'utilisateur existe déjà' };
        const hased = await bcrypt.hash(createUtilisateurDto.mot_de_passe, 10);
        const utilisateur = this.utilisateurRepository.create({ ...createUtilisateurDto, mot_de_passe: hased });
        await this.utilisateurRepository.save(utilisateur);
        return { message: 'enregistrement avec succées' };
    }
    async findAll() {
        return this.utilisateurRepository.find();
    }
    update(id, updateUtilisateurDto) {
        return `This action updates a #${id} utilisateur`;
    }
    remove(id) {
        return `This action removes a #${id} utilisateur`;
    }
};
exports.UtilisateurService = UtilisateurService;
exports.UtilisateurService = UtilisateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(utilisateur_entity_1.Utilisateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UtilisateurService);
//# sourceMappingURL=utilisateur.service.js.map