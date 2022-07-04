import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Task } from './entities/task.entity';
import { Equipos } from './entities/Equipos.entity';
import { actividades } from './entities/actividades.entity';
import { variablesxequipo } from './entities/variablesxequipo.entity';
import { mantenimiento } from './entities/mantenimiento.entity';
import { calibracion } from './entities/calibracion.entity';
import { verificacion } from './entities/verificacion.entity';
import { eventos } from './entities/eventos.entity';


import { TasksService } from './services/tasks.service';
import { actividadesService } from './services/actividades.service';
import { EquiposService } from './services/Equipos.service';
import { VariablesxequipoService } from './services/variablesxequipo.service';
import { MantenimientoService } from './services/mantenimiento.service';



import { TasksController } from './controllers/tasks.controller';
import { EquiposController } from './controllers/Equipos.controller';
import { actividadesController } from './controllers/actividades.controller';
import { VariablesxequipoController } from './controllers/variablesxequipo.controller';
import { MantenimientoController } from './controllers/mantenimiento.controller';
import { CalibracionService } from './services/calibracion.service';
import { CalibracionController } from './controllers/calibracion.controller';
import { VerificacionService } from './services/verificacion.service';
import { VerificacionController } from './controllers/verificacion.controller';
import { EventosService } from './services/eventos.service';
import { EventosController } from './controllers/eventos.controller';
;

@Module({
  imports:[
    TypeOrmModule.forFeature([Task,Equipos,actividades, variablesxequipo,mantenimiento,calibracion,verificacion,eventos])
  ],
  providers: [TasksService,EquiposService,actividadesService, VariablesxequipoService, MantenimientoService, CalibracionService, VerificacionService, EventosService ],
  controllers: [TasksController, EquiposController, actividadesController, VariablesxequipoController, MantenimientoController, CalibracionController, VerificacionController, EventosController]
})
export class TasksModule {}
