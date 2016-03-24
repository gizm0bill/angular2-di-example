import 
{
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from 'angular2/testing'
import {provide} from 'angular2/core'
import {setBaseTestProviders} from 'angular2/testing'
import 
{
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser'

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

import {Car} from '../scripts/car'
import {Engine} from '../scripts/interf/engine'

class MockEngine implements Engine
{
	public type: string = 'MockEngine'
	public capacity: number = 1000
}

describe('main tests', () => 
{
	beforeEachProviders(() => [ provide('Engine', {useClass: MockEngine}) ])
	it('should have mock engine', inject(['Engine'], (engine: any)=>
	{
		var car = new Car(engine, {}, {});
		expect(car.engineType).toBe('MockEngine')
	}))
});