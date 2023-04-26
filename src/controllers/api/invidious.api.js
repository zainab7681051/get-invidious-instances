const fetchInvidiousInstances = async () => {
	const requestUrl = 'https://api.invidious.io/instances.json'

	let instances = []
	try {
		const response = await fetch(requestUrl)
		const json = await response.json()
		instances = json.filter((instance) => {
				return !(instance[0].includes('.onion') ||
					instance[0].includes('.i2p') ||
					!instance[1].api)
			})
			.map((instance) => {
				return instance[1].uri.replace(/\/$/, '')
			})
		// console.log({
		// 	instances
		// })
		return instances
	} catch (err) {
		console.log({
			fetchInvidiousInstances_error: err
		})
	}
};

export async function getCurrentInstances() {
	try {
		const instanceList = await fetchInvidiousInstances()
		console.log({
			instanceList
		})
		return instanceList
	} catch (e) {
		console.log({
			getCurrentInstance_error: e
		})
	}

};

// export async function invidiousAPICall({
// 	resource = 'video',
// 	id = '',
// 	params = {},
// }) {
// 	try {
// 		let currentInstance;
// 		currentInstance = await getCurrentInstance()
// 		console.log({
// 			currentInstance
// 		});
// 		const requestUrl = currentInstance + '/api/v1/' + resource + '/' + id + '?' + new URLSearchParams(params)
// 			.toString()

// 		const response = await fetch(requestUrl)

// 		let result = await response.json();

// 		if (result.error !== undefined) {
// 			throw new Error(result.error)
// 		}
// 		return result;
// 	} catch (e) {
// 		console.log({
// 			invidiousAPICall_error: e
// 		});
// 	}

// }