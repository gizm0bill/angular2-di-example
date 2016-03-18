import {Tire} from '../../interf/tire'
import {Injectable} from 'angular2/core'
@Injectable()
export class Winter17Inch implements Tire
{
	width = 12;
	diameter = 17;
	rim = 13;
}