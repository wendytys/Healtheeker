import loadItems from '../modules/loadItems';

/**
 * Set up the instance of ALM WooCommerce
 *
 * @param {object} alm
 * @since 5.3.0
 */
export function wooInit(alm) {
	if (!alm || !alm.addons.woocommerce) {
		return false;
	}

	// Set button data attributes

	// Page
	alm.button.dataset.page = alm.addons.woocommerce_paged + 1;

	// URL
	let nextPage = alm.addons.woocommerce_paged_urls[alm.addons.woocommerce_paged];
	if (nextPage) {
		alm.button.dataset.url = nextPage;
	} else {
		alm.button.dataset.url = '';
	}

	// Set up URL and class parameters on first item in product listing
	let products = document.querySelector(alm.addons.woocommerce_classes.container); // Get `ul.products`
	if (products) {
		products.setAttribute('aria-live', 'polite');
		products.setAttribute('aria-atomic', 'true');

		alm.listing.removeAttribute('aria-live');
		alm.listing.removeAttribute('aria-atomic');

		let product = products.querySelector(alm.addons.woocommerce_classes.products); // Get first `.product` item
		if (product) {
			product.classList.add('alm-woocommerce');
			product.dataset.url = alm.addons.woocommerce_paged_urls[alm.addons.woocommerce_paged - 1];
			product.dataset.page = alm.page;
			product.dataset.pageTitle = document.title;
		}

		if (alm.addons.woocommerce_paged > 1) {
			// maybe soon
			almWooCommerceResultsTextInit(alm);
		}
	}
}

/**
 * Core ALM WooCommerce product loader
 *
 * @param {HTMLElement} content
 * @param {object} alm
 * @param {String} pageTitle
 * @since 5.3.0
 */

export function woocommerce(content, alm, pageTitle = document.title) {
	if (!content || !alm) {
		return false;
	}

	return new Promise((resolve) => {
		let container = document.querySelector(alm.addons.woocommerce_classes.container); // Get `ul.products`
		let products = content.querySelectorAll(alm.addons.woocommerce_classes.products); // Get all `.products`
		let url = alm.addons.woocommerce_paged_urls[alm.page];

		if (container && products && url) {
			// Convert NodeList to Array
			products = Array.prototype.slice.call(products);

			// Load the Products
			(async function () {
				await loadItems(container, products, alm, pageTitle, url, 'alm-woocommerce');
				resolve(true);
			})().catch((e) => {
				console.log(e, 'There was an error with WooCommerce');
			});
		}
	});
}

/**
 * Get the content, title and results text from the Ajax response
 *
 * @param {object} alm
 * @since 5.3.0
 */
export function wooGetContent(response, alm) {
	let data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: alm.localize.total_posts,
			debug: 'WooCommerce Query',
		},
	};
	if (response.status === 200 && response.data) {
		let div = document.createElement('div');
		div.innerHTML = response.data;

		// Get Page Title
		let title = div.querySelector('title').innerHTML;
		data.pageTitle = title;

		// Get Products HTML
		let products = div.querySelector(alm.addons.woocommerce_classes.container);
		data.html = products ? products.innerHTML : '';

		// Results Text
		almWooCommerceResultsText(div, alm);
	}

	return data;
}

/**
 *  almWooCommerceResultsText
 *  Set results text for WooCommerce Add-on.
 *
 *  @param {HTMLElement} target
 *  @param {Object} alm
 *  @since 5.3
 */
function almWooCommerceResultsText(target = '', alm) {
	if (target && alm && alm.addons.woocommerce_results_text) {
		let currentResults = target.querySelector(alm.addons.woocommerce_classes.results);
		if (currentResults) {
			let resultText = currentResults.innerHTML;
			alm.addons.woocommerce_results_text.forEach((element) => {
				if (alm.localize.woocommerce.settings.previous_page_link) {
					resultText = resultText + alm.localize.woocommerce.settings.previous_page_link;
				}
				element.innerHTML = resultText;
			});
		}
	}
}

/**
 *  almWooCommerceResultsTextInit
 *  Initiate Results text.
 *
 *  @param {Object} alm
 *  @since 5.3
 */
function almWooCommerceResultsTextInit(alm) {
	if (alm && alm.addons.woocommerce_results_text) {
		let results = document.querySelectorAll(alm.addons.woocommerce_classes.results);
		if (results.length < 1) {
			return false;
		}
		// Loop all result text elements
		results.forEach((element) => {
			if (alm.localize.woocommerce.settings.previous_page_link) {
				let newText = element.innerHTML;
				newText = newText + alm.localize.woocommerce.settings.previous_page_link;
				element.innerHTML = newText;
			}
		});
	}
}
