import mediaQueries from './mediaQueries'
import initialStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
    color: {
        primary: '#323C46',
        secondary: '#949EA8',
        graylight: '#A9AEB4',
        grayLighter: '#f2f2f2',
        white: '#ffffff',
        blue: '#454ea4'
    },

    fontFamily: {
        default: 'DM Sans, sans-serif',
    },

    lineHeight: {
        default: 1.3,
    },

    layout: {
        default: '640px',
    },

    gap: {
        default: '20px',
        big: '64px',
    },

    transition: '0.2s cubic-bezier(.8, .20, .48, 1.0)',

    mediaQueries: { ...mediaQueries },
} as const

export type Theme = typeof theme
export const styled = initialStyled as ThemedStyledInterface<Theme>
