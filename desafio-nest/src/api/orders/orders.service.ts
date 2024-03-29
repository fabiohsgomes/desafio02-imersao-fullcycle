import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  create(data: { asset_id: string; price: number }) {
    return this.prismaService.order.create({ data });
  }

  findAll() {
    return this.prismaService.order.findMany();
  }
}
