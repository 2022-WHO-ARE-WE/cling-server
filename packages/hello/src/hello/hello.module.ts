import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { NodeEntity } from 'shared/lib/entities/node.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NodeEntity])],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
