import { Body, Controller, Post, Get } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  createAsset(@Body() body: { id: string; symbol: string }) {
    return this.assetsService.create(body);
  }

  @Get()
  findAllAssets() {
    return this.assetsService.findAll();
  }
}
