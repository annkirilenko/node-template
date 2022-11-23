import 'reflect-metadata';
import { container } from 'tsyringe';
import HelloController from './modules/hello/HelloController';

export const helloController = container.resolve(HelloController);