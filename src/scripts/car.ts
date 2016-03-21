import {Component, Inject} from 'angular2/core'

import {Engine} from './interf/engine'
import {Tire} from './interf/tire'
import {Door} from './interf/door'

@Component
({
	selector: 'car-skoda',
	template: 
	`<div class="col-md-4">
		<div class="panel panel-info">
	   	<div class="panel-heading">{{name}}</div>
	    <div class="panel-body"><h4>╺⊖╾╼⊖╸</h4></div>
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
  </div>`
})
export class Car
{
	public engineType: string = this.engine.type
	public engineCapacity: number = this.engine.capacity
	
	public tireWidth: number = this.tire.width;
	public tireDiameter: number = this.tire.diameter;
	public tireRim: number = this.tire.rim;

	public doorType: string = this.door.type;

	public name: string = 'Skoda';

	//- inject dependencies by name string
	constructor
	(
		@Inject('Engine') private engine: Engine, 
		@Inject('Tire') private tire: Tire, 
		@Inject('Door') private door: Door
	)
	{
	}
}