import { Button } from "#src/pages/index/components/Button.jsx"
import * as m from "#src/paraglide/messages.js"

const AstroHeader = () => {
	return (
		<>
			<div class="relative bg-surface-100 overflow-hidden rounded-xl border border-surface-200 flex flex-col md:flex-row flex-wrap md:items-end mb-8 px-4 py-4 gap-4">
				<div class="relative z-30 flex-1 flex flex-col items-start gap-4 px-6 py-3 md:min-w-[380px]">
					<div class="flex flex-col gap-2 pt-2 md:pt-6">
						<p class="text-sm text-[#E23788] font-medium">For the Astro Community</p>
						<h2 class="font-medium text-xl">Recommended i18n library</h2>
					</div>
					<p class="text-sm text-surface-500 pr-20">
						A small collection of tooling to get you going to build your global Astro app with
						localized islands.
					</p>
					<div class="pt-6 flex gap-4">
						<Button type="secondary" href="/g/utqgkmzp">
							{m.marketplace_application_header_svelte_button()}
						</Button>
						<Button
							type="text"
							chevron
							href="https://docs.astro.build/en/recipes/i18n/#community-libraries"
						>
							Read Astros Docs
						</Button>
					</div>
				</div>
				<a
					href="/m/gerre34r/library-inlang-paraglideJs"
					class="relative flex-1 h-[260px] bg-background rounded-xl border border-surface-300 flex flex-col justify-end md:min-w-[380px] group hover:border-surface-400 transition-all cursor-pointer"
				>
					<div class="px-7 pb-4 z-20">
						<img
							class="w-20 pt-20"
							src="https://cdn.jsdelivr.net/gh/opral/monorepo@latest/inlang/source-code/paraglide/paraglide-js/assets/paraglideNoBg.png"
							alt="ParaglideJS"
						/>
					</div>
					<h3 class="font-medium text-lg px-8 pb-1 z-20">Paraglide JS - i18n library</h3>
					<p class="text-surface-500 px-8 pb-6 text-sm pr-20 z-20">
						A i18n library without async resources. Build for the Astro community.
					</p>
					<div class="absolute z-20 top-4 right-4 w-8 h-8 border border-surface-400 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
						<Arrow />
					</div>
					<div class="absolute w-full h-full top-0 bg-gradient-to-r from-[#E23788] to-[#FCE4EE] rounded-xl z-10 opacity-30" />
					<div class="absolute w-full h-full top-0 bg-gradient-to-t from-background rounded-xl z-10" />
				</a>
				<div class="flex-1 h-[260px] flex flex-col gap-4 md:min-w-[380px]">
					<a
						href="/g/utqgkmzp"
						class="w-full flex-1 bg-background rounded-xl border border-surface-300 flex flex-col relative group hover:border-surface-400 transition-all cursor-pointer"
					>
						<div class="pl-8 pb-2 -mt-[2px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="30"
								fill="none"
								viewBox="0 0 28 38"
							>
								<path fill="#CBD5E1" d="M0 0h28v38L14 26.057 0 38V0z" />
							</svg>
						</div>
						<div class="flex-1 flex flex-col justify-end">
							<h3 class="font-medium text-lg px-8 pb-1">Complete i18n Astro Guide</h3>
							<p class="text-surface-500 px-8 pb-6 text-sm pr-20">
								A complete guide on how to adopt inlang with Paraglide JS.
							</p>
						</div>
						<div class="absolute top-4 right-4 w-8 h-8 border border-surface-300 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
							<Arrow />
						</div>
					</a>
					<a
						href="https://stackblitz.com/~/github.com/LorisSigrist/paraglide-astro-example"
						target="_blanc"
						class="w-full bg-background rounded-xl border border-surface-300 relative group hover:border-surface-400 transition-all cursor-pointer"
					>
						<h3 class="font-medium text-lg px-8 pb-1 pt-6">Code Example</h3>
						<p class="text-surface-500 px-8 pb-6 text-sm pr-20">Visit our stackblitz example.</p>
						<div class="absolute top-4 right-4 w-8 h-8 border border-surface-300 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
							<Arrow />
						</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default AstroHeader

function Arrow() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 28 28">
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2.75"
				d="M3 14h22m0 0l-8.25 8.25M25 14l-8.25-8.25"
			/>
		</svg>
	)
}
