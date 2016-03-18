import {Engine} from '../../interf/engine'
import {Injectable} from 'angular2/core'
@Injectable()
export class PetrolEngine implements Engine
{
	type = 'petrol';
}
