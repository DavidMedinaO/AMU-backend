import { TasksService } from './../services/tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<import("../entities/task.entity").Task[]>;
    findOne(id: number): Promise<import("../entities/task.entity").Task>;
    create(body: any): Promise<import("../entities/task.entity").Task>;
    update(id: number, body: any): Promise<import("../entities/task.entity").Task>;
    delete(id: number): Promise<boolean>;
}
