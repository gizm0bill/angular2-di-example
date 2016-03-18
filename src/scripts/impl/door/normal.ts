import {Door} from '../../interf/door'
import {Injectable} from 'angular2/core'
@Injectable()
export class NormalDoor implements Door
{
	type = 'normal'
}