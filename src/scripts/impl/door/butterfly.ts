import {Door} from '../../interf/door'
import {Injectable} from 'angular2/core'
@Injectable()
export class ButterflyDoor implements Door
{
	type = 'butterfly'
}