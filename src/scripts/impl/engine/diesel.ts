import {Engine} from '../../interf/engine'
import {Injectable} from 'angular2/core'
@Injectable()
export class DieselEngine implements Engine
{
	type = 'diesel';
}
