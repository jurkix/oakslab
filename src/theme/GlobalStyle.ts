import { Theme } from './main'
import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle(
    ({ theme }: { theme: Theme }) => css`
        ${reset};

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html {
            height: 100%;
        }

        html,
        body {
            min-height: 100%;
        }

        body {
            padding: 100px 0;
            background-color: ${theme.color.grayLighter};
        }

        body,
        form,
        input,
        select,
        button,
        p,
        pre,
        dfn,
        address,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        img,
        table,
        tr,
        td,
        th,
        textarea {
            line-height: ${theme.lineHeight.default};

            color: ${theme.color.primary};
            font-size: 16px;
            font-family: ${theme.fontFamily.default};

            @media ${theme.mediaQueries.queryLg} {
                font-size: 18px;
            }
        }

        h1 {
            margin-bottom: 64px;
            font-size: 36px;
            font-weight: 700;
        }

        h2 {
            margin-bottom: 40px;
            font-size: 36px;
            font-weight: 700;
        }

        img:not(.icon) {
            max-width: 100%;
            height: auto;

            image-rendering: -webkit-optimize-contrast;
        }

        p {
            word-wrap: break-word;
            margin-bottom: 10px;

            font-weight: 400;
        }

        a {
            text-decoration: none;
            color: ${theme.color.secondary};
            transition: color ${theme.transition};
            cursor: pointer;
            outline: none;

            &:hover {
                text-decoration: underline;
                color: ${theme.color.secondary};
            }
        }

        b,
        strong {
            font-weight: 700;
        }
    `,
)

export default GlobalStyle
