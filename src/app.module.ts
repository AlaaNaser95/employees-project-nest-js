import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseConfig from './config/database/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => await config.get('database'),
      inject: [ConfigService],
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
