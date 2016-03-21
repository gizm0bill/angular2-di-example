import {OpaqueToken} from 'angular2/core';

export let ENGINE = new OpaqueToken('Engine');

// car.ts:
// 
// import {ENGINE} from './tokens.ts'
// ...
// @Inject(ENGINE) private engine: Engine - rather than string 'Engine'
//
// main.ts:
// 
// import {ENGINE} from './tokens.ts'
// ...
// provide(ENGINE, {useClass:DieselEngine}) - rather than string 'Engine'