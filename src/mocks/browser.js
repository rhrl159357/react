import {setupWorker} from 'msw';
import {hardlens} from './hardlens';


export const worker = setupWorker(...hardlens);