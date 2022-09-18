import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { BusinessCategoryEntity } from 'shared/lib/entities/businessCategory.entity';
import { BusinessCodeEntity } from 'shared/lib/entities/businessCode.entity';
import { BusinessSubCategoryEntity } from 'shared/lib/entities/businessSubCategory.entity';
import { CompanyEntity } from 'shared/lib/entities/company.entity';
import { InvitationEntity } from 'shared/lib/entities/invitation.entity';
import { NodeEntity } from 'shared/lib/entities/node.entity';
import { PipelineEntity } from 'shared/lib/entities/pipeline.entity';
import { PipelineCategoryEntity } from 'shared/lib/entities/pipelineCategory.entity';
import { TransparentCodeEntity } from 'shared/lib/entities/transparentCode.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get('DB_PORT')),
        database: config.get<string>('DB_NAME'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        entities: [
          BusinessCategoryEntity,
          BusinessCodeEntity,
          BusinessSubCategoryEntity,
          CompanyEntity,
          InvitationEntity,
          NodeEntity,
          PipelineEntity,
          PipelineCategoryEntity,
          TransparentCodeEntity,
        ],
        migrations: [],
        subscribers: [],
        synchronize: true,
        charset: 'utf8_general_ci',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
