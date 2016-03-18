import {bootstrap} from 'angular2/platform/browser'
import {provide, Component} from 'angular2/core'
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

//- of course you could create stuff dynamically
import {carFactory} from './car-factory'
let mazda = carFactory( 'Mazda',
{
	selector: 'factory-car',
	template: 
	`<div class="col-md-4">
		<div class="panel panel-danger">
	   	<div class="panel-heading">{{name}}</div>
	    <div class="panel-body"><h4>╺⊘╾╼⊘╸</h4></div>
	    <ul class="list-group">
	      <li class="list-group-item">engine: {{engineType}} <span *ngIf="engineCapacity">- {{engineCapacity}} cc</span></li>
	      <li class="list-group-item">tires: {{tireWidth}} x {{tireDiameter}} x {{tireRim}}</li>
	      <li class="list-group-item">doors: {{doorType}}</li>
	    </ul>
	  </div>
  </div>`
})
bootstrap( mazda, 
[
	provide('Engine', {useClass:DieselEngine}), 
	provide('Tire', {useClass: Summer19Inch}), 
	provide('Door', {useClass: NormalDoor})
])
