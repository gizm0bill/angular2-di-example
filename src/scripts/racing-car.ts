import {Component, Inject} from 'angular2/core'
import {Engine} from './interf/engine'
import {Tire} from './interf/tire'
import {Door} from './interf/door'

@Component
({
	selector: 'racing-car',
	template: 
	`<div class="col-md-4">
		<div class="panel panel-success">
	   	<div class="panel-heading">{{name}}</div>
	    <div class="panel-body"><h4>╺⊜╾╼⊜╸</h4></div>
	    <ul class="list-group">
	      <li class="list-group-item">engine: {{engineType}} <span *ngIf="engineCapacity">- {{engineCapacity}} cc</span></li>
	      <li class="list-group-item">tires: {{tireWidth}} x {{tireDiameter}} x {{tireRim}}</li>
	      <li class="list-group-item">doors: {{doorType}}</li>
	    </ul>
	  </div>
  </div>`
})
export class RacingCar
{
	public engineType: string = this.engine.type
	public engineCapacity: number = this.engine.capacity
	
	public tireWidth: number = this.tire.width;
	public tireDiameter: number = this.tire.diameter;
	public tireRim: number = this.tire.rim;

	public doorType: string = this.door.type;

	public name: string = 'Ferrari';

	constructor
	(
		@Inject('Engine') private engine: Engine, 
		@Inject('Tire') private tire: Tire, 
		@Inject('Door') private door: Door
	)
	{

	}
}