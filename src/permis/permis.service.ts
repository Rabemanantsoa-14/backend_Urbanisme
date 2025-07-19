import { Injectable } from '@nestjs/common';
import { CreatePermiDto } from './dto/create-permi.dto';
import { UpdatePermiDto } from './dto/update-permi.dto';

@Injectable()
export class PermisService {
  create(createPermiDto: CreatePermiDto) {
    return 'This action adds a new permi';
  }

  findAll() {
    return `This action returns all permis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permi`;
  }

  update(id: number, updatePermiDto: UpdatePermiDto) {
    return `This action updates a #${id} permi`;
  }

  remove(id: number) {
    return `This action removes a #${id} permi`;
  }
}
