import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermisService } from './permis.service';
import { CreatePermiDto } from './dto/create-permi.dto';
import { UpdatePermiDto } from './dto/update-permi.dto';

@Controller('permis')
export class PermisController {
  constructor(private readonly permisService: PermisService) {}

  @Post()
  create(@Body() createPermiDto: CreatePermiDto) {
    return this.permisService.create(createPermiDto);
  }

  @Get()
  findAll() {
    return this.permisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermiDto: UpdatePermiDto) {
    return this.permisService.update(+id, updatePermiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permisService.remove(+id);
  }
}
