export const useGetHomeUrl = () => {
	const { locale } = useI18n()
	const config = useRuntimeConfig()

	if (locale.value === config.public.defaultLanguage) {
		return '/'
	}

	return '/' + locale.value

}