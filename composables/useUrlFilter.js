export const useUrlFilter = (url) => {
	let filteredUrl = url.endsWith("home") ? url.slice(0, -4) : url
	filteredUrl = url.startsWith("/") ? filteredUrl : '/' + filteredUrl
	//filteredUrl = filteredUrl === '' ? '/' : filteredUrl
	return filteredUrl
}
