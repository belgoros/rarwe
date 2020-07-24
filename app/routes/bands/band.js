import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
	model(params) {
		return this.catalog.find('band', band => band.slug === params.slug);
	}
}
