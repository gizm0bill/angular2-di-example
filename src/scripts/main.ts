import {bootstrap} from 'angular2/platform/browser'
import {provide, Component} from 'angular2/core'

//- components
import {Car} from './car'
import {RacingCar} from './racing-car'

//- import concrete implementations
import {PetrolEngine} from './impl/engine/petrol'
import {DieselEngine} from './impl/engine/diesel'
import {Summer19Inch} from './impl/tire/summer-17-inch'
import {Winter17Inch} from './impl/tire/winter-17-inch'
import {NormalDoor} from './impl/door/normal'
import {ButterflyDoor} from './impl/door/butterfly'

//- bootstrap each component with desired implementation
bootstrap(Car, 
[
	provide('Engine', {useClass: DieselEngine}), 
	provide('Tire', {useClass: Winter17Inch}), 
	provide('Door', {useClass: NormalDoor})
])
bootstrap(RacingCar, 
[
	provide('Engine', {useClass:PetrolEngine}), 
	provide('Tire', {useClass: Summer19Inch}), 
	provide('Door', {useClass: ButterflyDoor})
])

let template = 
	`<div class="col-md-4">
		<div class="panel panel-warning">
	   	<div class="panel-heading">{{name}}</div>
	    <div class="panel-body"><h4>╺⊘╾╼⊘╸</h4></div>
	    <ul class="list-group">
	      <li class="list-group-item">
	      	engine: <strong>{{engineType}} <span *ngIf="engineCapacity">- {{engineCapacity}} cc</span></strong>
	      </li>
	      <li class="list-group-item">
	      	tires: <strong>{{tireWidth}} x {{tireDiameter}} x {{tireRim}}</strong>
	      </li>
	      <li class="list-group-item">
	      	doors: <strong>{{doorType}}</strong>
	      </li>
	    </ul>
	  </div>
  </div>`;

//- of course you could create stuff dynamically
import {carFactory} from './car-factory'
let mazda = carFactory( 'Mazda',
{
	selector: 'factory-car-mazda',
	template: template
})
bootstrap( mazda, 
[
	provide('Engine', {useClass: DieselEngine}), 
	provide('Tire', {useClass: Summer19Inch}), 
	provide('Door', {useClass: NormalDoor})
])

let hyundai = carFactory( 'Hyundai',
{
	selector: 'factory-car-hyundai',
	template: template
})
bootstrap( hyundai, 
[
	provide('Engine', {useClass: PetrolEngine}), 
	provide('Tire', {useClass: Winter17Inch}), 
	provide('Door', {useClass: NormalDoor})
])
