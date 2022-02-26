import { RandomEngine } from 'better-random.js';
import { GeneratorOptions } from './typings.js';

const rng = new RandomEngine();

export function generator({ characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', length = 32 }: GeneratorOptions): string {
	return rng.string(length, characters);
}