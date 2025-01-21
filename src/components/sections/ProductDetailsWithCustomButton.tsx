import { CustomBuyButton } from '../CustomBuyButton';
import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'

const ProductDetailsWithCustomButton = getOverriddenSection({
    Section: ProductDetailsSection,
    components: {
        BuyButton: { Component: CustomBuyButton },
    },
})

export default ProductDetailsWithCustomButton;