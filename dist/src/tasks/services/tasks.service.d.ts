import { Repository } from 'typeorm';
import { Task } from './../entities/task.entity';
export declare class TasksService {
    private tasksRepo;
    constructor(tasksRepo: Repository<Task>);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    create(body: any): Promise<Task>;
    update(id: number, body: any): Promise<Task>;
    remove(id: number): Promise<boolean>;
}
