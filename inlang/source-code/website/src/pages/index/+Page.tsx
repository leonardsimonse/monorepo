import { Link, Meta, Title } from "@solidjs/meta"
import HeroSearch from "./custom_section/HeroSearch.jsx"
import MarketplaceLayout from "#src/interface/marketplace/MarketplaceLayout.jsx"
import { currentPageContext } from "#src/renderer/state.js"
import Guides from "./custom_section/Guides.jsx"
import Features from "./custom_section/Features.jsx"
import ParaglideHeader from "#src/interface/marketplace/categoryHeaders/cards/paraglide.jsx"
import * as m from "#src/paraglide/messages.js"
import { renderLocales } from "#src/renderer/renderLocales.js"
import Personas from "./custom_section/Personas/index.jsx"
import ExtendSection from "./custom_section/Extend/index.jsx"
import LixSection from "./custom_section/Lix/index.jsx"

export default function Page() {
	return (
		<>
			<Title>{m.inlang_global_title()}</Title>
			<Meta name="description" content={m.inlang_global_description()} />
			<Meta
				name="og:image"
				content="https://cdn.jsdelivr.net/gh/opral/monorepo@latest/inlang/source-code/website/public/opengraph/inlang-social-image.jpg"
			/>
			<Meta name="twitter:card" content="summary_large_image" />
			<Meta
				name="twitter:image"
				content="https://cdn.jsdelivr.net/gh/opral/monorepo@latest/inlang/source-code/website/public/opengraph/inlang-social-image.jpg"
			/>
			<Meta name="twitter:image:alt" content={m.inlang_twitter_title()} />
			<Meta name="twitter:title" content={m.inlang_global_title()} />
			<Meta name="twitter:description" content={m.inlang_global_description()} />
			<Meta name="twitter:site" content="@inlanghq" />
			<Meta name="twitter:creator" content="@inlanghq" />
			{renderLocales(currentPageContext.urlParsed.pathname).map((locale) => (
				<Link
					href={locale.href}
					hreflang={locale.hreflang}
					// @ts-ignore
					rel={
						locale.rel
							? locale.rel // eslint-disable-next-line unicorn/no-null
							: null
					}
				/>
			))}
			<Link href={`https://inlang.com${currentPageContext.urlParsed.pathname}`} rel="canonical" />
			<MarketplaceLayout>
				<HeroSearch />
				<Features />
				<Personas />
				<ExtendSection />
				{/* <EcosystemComponents /> */}
				<Guides />
				<LixSection />
				<ParaglideHeader />
			</MarketplaceLayout>
		</>
	)
}
