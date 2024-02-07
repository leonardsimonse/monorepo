// src/i18n/index.ts (or wherever you want)
import * as paraglide from "./../paraglide/runtime.js" // generated by paraglide
import {
	createI18n,
	languageTagFromPathname,
	useLocationPathname,
} from "@inlang/paraglide-js-adapter-solidstart"

export const { LanguageTagProvider, languageTag, setLanguageTag } = createI18n(paraglide)

export function useLocationLanguageTag(): paraglide.AvailableLanguageTag | undefined {
	const pathname = useLocationPathname()
	return languageTagFromPathname(pathname, paraglide.availableLanguageTags)
}
