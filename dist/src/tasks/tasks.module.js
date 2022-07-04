"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./entities/task.entity");
const Equipos_entity_1 = require("./entities/Equipos.entity");
const actividades_entity_1 = require("./entities/actividades.entity");
const variablesxequipo_entity_1 = require("./entities/variablesxequipo.entity");
const mantenimiento_entity_1 = require("./entities/mantenimiento.entity");
const calibracion_entity_1 = require("./entities/calibracion.entity");
const verificacion_entity_1 = require("./entities/verificacion.entity");
const eventos_entity_1 = require("./entities/eventos.entity");
const tasks_service_1 = require("./services/tasks.service");
const actividades_service_1 = require("./services/actividades.service");
const Equipos_service_1 = require("./services/Equipos.service");
const variablesxequipo_service_1 = require("./services/variablesxequipo.service");
const mantenimiento_service_1 = require("./services/mantenimiento.service");
const tasks_controller_1 = require("./controllers/tasks.controller");
const Equipos_controller_1 = require("./controllers/Equipos.controller");
const actividades_controller_1 = require("./controllers/actividades.controller");
const variablesxequipo_controller_1 = require("./controllers/variablesxequipo.controller");
const mantenimiento_controller_1 = require("./controllers/mantenimiento.controller");
const calibracion_service_1 = require("./services/calibracion.service");
const calibracion_controller_1 = require("./controllers/calibracion.controller");
const verificacion_service_1 = require("./services/verificacion.service");
const verificacion_controller_1 = require("./controllers/verificacion.controller");
const eventos_service_1 = require("./services/eventos.service");
const eventos_controller_1 = require("./controllers/eventos.controller");
;
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task, Equipos_entity_1.Equipos, actividades_entity_1.actividades, variablesxequipo_entity_1.variablesxequipo, mantenimiento_entity_1.mantenimiento, calibracion_entity_1.calibracion, verificacion_entity_1.verificacion, eventos_entity_1.eventos])
        ],
        providers: [tasks_service_1.TasksService, Equipos_service_1.EquiposService, actividades_service_1.actividadesService, variablesxequipo_service_1.VariablesxequipoService, mantenimiento_service_1.MantenimientoService, calibracion_service_1.CalibracionService, verificacion_service_1.VerificacionService, eventos_service_1.EventosService],
        controllers: [tasks_controller_1.TasksController, Equipos_controller_1.EquiposController, actividades_controller_1.actividadesController, variablesxequipo_controller_1.VariablesxequipoController, mantenimiento_controller_1.MantenimientoController, calibracion_controller_1.CalibracionController, verificacion_controller_1.VerificacionController, eventos_controller_1.EventosController]
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map