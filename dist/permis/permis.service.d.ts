import { CreatePermiDto } from './dto/create-permi.dto';
import { UpdatePermiDto } from './dto/update-permi.dto';
export declare class PermisService {
    create(createPermiDto: CreatePermiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePermiDto: UpdatePermiDto): string;
    remove(id: number): string;
}
