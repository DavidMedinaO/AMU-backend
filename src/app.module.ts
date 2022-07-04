import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';



@Module({
  imports: [    
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: 'postgres://hurdiwlp:sqiE4kjed_00hA30a2zqApGYAeiNgmIr@heffalump.db.elephantsql.com/hurdiwlp',
    username: 'hurdiwlp',
    password: 'sqiE4kjed_00hA30a2zqApGYAeiNgmIr',
    database: 'hurdiwlp',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
  }),TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
