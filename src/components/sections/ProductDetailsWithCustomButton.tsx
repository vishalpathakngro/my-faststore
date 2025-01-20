// import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'

// const ProductDetailsWithCustomButton = getOverriddenSection({
// Section: ProductDetailsSection,
// components: {
//     BuyButton: { props: { size: "small", iconPosition: "right" } } 
// },
// });

// export default ProductDetailsWithCustomButton;


import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
import { CustomBuyButton } from '../CustomBuyButton';

const ProductDetailsWithCustomButton = getOverriddenSection({
    Section: ProductDetailsSection,
    components: {
        BuyButton: { Component: CustomBuyButton },
    },
})

export default ProductDetailsWithCustomButton;