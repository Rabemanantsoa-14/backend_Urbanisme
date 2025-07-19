import { PermisService } from './permis.service';
import { CreatePermiDto } from './dto/create-permi.dto';
import { UpdatePermiDto } from './dto/update-permi.dto';
export declare class PermisController {
    private readonly permisService;
    constructor(permisService: PermisService);
    create(createPermiDto: CreatePermiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePermiDto: UpdatePermiDto): string;
    remove(id: string): string;
}
