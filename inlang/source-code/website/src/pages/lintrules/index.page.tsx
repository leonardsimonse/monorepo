import { Meta, Title } from "@solidjs/meta"
import Marketplace from "#src/components/sections/marketplace/index.jsx"
import MarketplaceLayout from "#src/components/marketplace/MarketplaceLayout.jsx"

export function Page() {
  return (
    <>
      <Title>inlang Lint Rules</Title>
      <Meta name="description" content="Enable team-wide quality checks that can be resolved automatically." />
      <Meta name="og:image" content="/images/inlang-marketplace-image.jpg" />
      <div class="bg-surface-50">
        <MarketplaceLayout>
          <div class="pb-16 md:pb-20 min-h-screen relative">
            <h2 class="text-md text-surface-600 pb-4 pt-8">All Products</h2>
            <Marketplace />
          </div>
        </MarketplaceLayout>
      </div>
    </>
  )
}
