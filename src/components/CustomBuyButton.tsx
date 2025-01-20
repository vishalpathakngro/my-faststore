import React from 'react'
import { Button as UIButton } from '@faststore/ui'

export function CustomBuyButton() {

    console.log('hey custom compoennt called')
return (
    <UIButton
    variant="primary"
    onClick={() => {
        alert('Hello User!')
    }}
    >
    New Buy Button
    </UIButton>
)
}