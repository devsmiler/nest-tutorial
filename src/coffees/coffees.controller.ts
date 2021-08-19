import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Jesus this is our Coffees. Limit: ${limit}, Offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns #${params.id} coffees`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This Action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This Action delete #${id} coffee`;
  }
}
