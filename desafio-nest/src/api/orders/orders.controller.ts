import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  creaateOrder(@Body() body: { asset_id: string; price: number }) {
    return this.ordersService.create(body);
  }

  @Get()
  findAllOrders() {
    return this.ordersService.findAll();
  }
}
