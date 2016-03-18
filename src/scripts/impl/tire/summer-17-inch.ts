import {Tire} from '../../interf/tire'
import {Injectable} from 'angular2/core'
@Injectable()
export class Summer19Inch implements Tire
{
	width = 14;
	diameter = 19;
	rim = 13;
}