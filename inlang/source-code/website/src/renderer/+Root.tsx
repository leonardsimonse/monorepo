import { type Accessor, type Component, createEffect, ErrorBoundary } from "solid-js"
import type { PageContextRenderer } from "./types.js"
import { Dynamic } from "solid-js/web"
import { LocalStorageProvider } from "#src/services/local-storage/index.js"
import { sourceLanguageTag } from "#src/paraglide/runtime.js"
import { LanguageTagProvider, useLocationLanguageTag } from "./i18n.js"

export type RootProps = Accessor<{
	pageContext: PageContextRenderer
}>

/**
 * The Page that is being rendered.
 *
 * This is the entry point for all pages and acts as a wrapper
 * to provide the page with the required context and provide
 * error boundaries.
 */
export default function Root(props: { page: Component; pageProps: Record<string, unknown> }) {
	// const url_language_tag = useLocationLanguageTag()
	// const language_tag = url_language_tag ?? sourceLanguageTag

	return (
		<ErrorBoundary fallback={(error) => <ErrorMessage error={error} />}>
			{/* <LanguageTagProvider value={"en"}> */}
			<LocalStorageProvider>
				<Dynamic component={props.page} {...(props.pageProps ?? {})} />
			</LocalStorageProvider>
			{/* </LanguageTagProvider> */}
		</ErrorBoundary>
	)
}

function ErrorMessage(props: { error: Error }) {
	createEffect(() => {
		console.error("ERROR in renderer", props.error)
	})
	return (
		<>
			<p class="text-danger text-lg font-medium">ERROR DURING RENDERING</p>
			<p class="text-danger">
				Check the console for more information and please{" "}
				<a
					class="link text-primary"
					target="_blank"
					href="https://github.com/opral/monorepo/issues/new/choose"
				>
					report the bug.
				</a>
			</p>
			<p class="bg-danger-container text-on-danger-container rounded p-2 mt-4">
				{props.error?.toString()}
			</p>
		</>
	)
}
