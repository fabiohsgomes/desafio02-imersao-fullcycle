import { Module } from '@nestjs/common';
import { AssetsModule } from './api/assets/assets.module';
import { OrdersModule } from './api/orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AssetsModule, OrdersModule, PrismaModule],
})
export class AppModule {}
