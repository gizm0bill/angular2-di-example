import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'
import {Car} from './car'
import {RacingCar} from './racing-car'
import {PetrolEngine} from './impl/engine/petrol'
import {DieselEngine} from './impl/engine/diesel'
import {Summer19Inch} from './impl/tire/summer-17-inch'
import {Winter17Inch} from './impl/tire/winter-17-inch'
import {NormalDoor} from './impl/door/normal'
import {ButterflyDoor} from './impl/door/butterfly'

bootstrap(Car, 
[
	provide('Engine', {useClass:DieselEngine}), 
	provide('Tire', {useClass: Winter17Inch}), 
	provide('Door', {useClass: NormalDoor})
])

bootstrap(RacingCar, 
[
	provide('Engine', {useClass:PetrolEngine}), 
	provide('Tire', {useClass: Summer19Inch}), 
	provide('Door', {useClass: ButterflyDoor})
])