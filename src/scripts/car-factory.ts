import {Component, Inject} from 'angular2/core'

import {Engine} from './interf/engine'
import {Tire} from './interf/tire'
import {Door} from './interf/door'

//- car creation factory function
//- returns an actual decorated class
/*!
 * name - component name
 * compDef - component definition
 */
export let carFactory = (name: string, compDef: {selector: string, template: string}) =>
{
	@Component
	({ 
		selector: compDef.selector, 
		template: compDef.template 
	})
	class FakeComponent
	{
		public engineType: string = this.engine.type
		public engineCapacity: number = this.engine.capacity
		
		public tireWidth: number = this.tire.width;
		public tireDiameter: number = this.tire.diameter;
		public tireRim: number = this.tire.rim;

		public doorType: string = this.door.type;

		public name: string = name;
		//- injected with name string, same as basic car component
		constructor
		(
			@Inject('Engine') private engine: Engine, 
			@Inject('Tire') private tire: Tire, 
			@Inject('Door') private door: Door
		){}
	}
	return FakeComponent
}
