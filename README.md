# Angular2 DI example

## Installation

- `npm install`
- `npm run typings install`
- `npm run server` and open up _localhost:8081_

If it's working it should look like this:

![Screenshot]
(./screenshot.png)

## Theory of operation

The main idea of this article is to exemplify how [Dependency Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html) works on Angular2 components.  
We're going to create some "car" components that require some dependencies, like engine, doors and tires, which will be later wired up by Angular.

OK! Let's...

We start by requiring just some interfaces for the car's parts. We don't know what actual specifications a car will have, and we shouldn't care at the moment anyway.
```typescript
export interface Engine
{
	type? : string
	capacity? : number
}
```
We will inject these into the constructor, using a string token, with the `@Inject` decorator, like so:
```typescript
import {Engine} from './interf/engine'
// ...
class Car
{
	constructor
	( 
		@Inject('Engine') engine: Engine, 
		@Inject('Tire') tire: Tire, 
		@Inject('Door') door: Door
	){}
}
```
_The reason behind the string token is that in TypeScript, interfaces are structural and are not retained at runtime. They will just disappear on compile..._  
We could also use [OpaqueToken](https://angular.io/docs/ts/latest/api/core/OpaqueToken-class.html) for these, safer in case of inter-developer naming collisions 

Now, we're going to call in our automotive engineer to build us some car parts.  
For example, for the engine, he's going to import our engine interface, define some concrete class with specific properties and export it as `@Injectable()`
```typescript
import {Injectable} from 'angular2/core'
import {Engine} from '../../interf/engine'

@Injectable()
export class PetrolEngine implements Engine
{
	type = 'petrol'
	capacity = 1500
	// ...and so on
}
```  

Finally we can wrap them all together using Angular2's `bootstrap()` function, telling it what actual parts to `provide` for each desired component
```typescript
import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'

// the car component
import {Car} from './car'

// car parts implementations
import {DieselEngine} from './impl/engine/diesel'
import {Winter17Inch} from './impl/tire/winter-17-inch'
import {NormalDoor} from './impl/door/normal'

// and bootstrap!
bootstrap(Car, 
[
	provide('Engine', {useClass: PetrolEngine}), 
	provide('Tire', {useClass: Winter17Inch}), 
	provide('Door', {useClass: NormalDoor})
])
```

PS: You can find the juicy stuff in `src/scripts`

### Toodles!

