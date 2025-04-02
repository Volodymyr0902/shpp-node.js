import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot("mongodb+srv://admin:todosproject@todo.i2ft2.mongodb.net/nest-rest")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
