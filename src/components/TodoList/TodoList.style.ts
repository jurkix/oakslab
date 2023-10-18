import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type TodoItemStyledStyledProps = HTMLAttributes<HTMLDivElement> & {
    isCompleted: boolean
    isClickable: boolean
}

type TitleStyledProps = HTMLAttributes<HTMLHeadingElement> & {
    isCompleted: boolean
}

export const TodoListStyled = styled.div`
    margin-bottom: 44px;
`;

export const TitleStyled = styled.h2<TitleStyledProps>(
    ({ theme, isCompleted }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 50px;
        padding-right: 66px;
        color: ${theme.color.primary};
        font-size: 24px;

        span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 46px;
            height: 46px;
            margin-right: 20px;
            border-radius: 50%;
            color: ${theme.color.white};
            background-color: ${theme.color.primary};
        }

        ${isCompleted &&
        css`
            background: url('/images/check.svg') right / auto 50px no-repeat;
        `};
    `,
)

export const TodoItemStyled = styled.div<TodoItemStyledStyledProps>(
    ({ theme, isCompleted, isClickable }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        padding-left: 8px;
        background-color: ${theme.color.white};
        cursor: pointer;

        ${!isClickable &&
        css`
            cursor: not-allowed;
            opacity: 0.6;
        `};

        ${isCompleted && !isClickable &&
        css`
            opacity: 1;
        `};

        span {
            position: relative;
            flex-shrink: 0;
            width: 30px;
            height: 30px;
            margin-right: 20px;
            transition: border-color ${theme.transition};
            background-color: ${theme.color.white};
            border: 2px solid ${theme.color.graylight};
            border-radius: 6px;
            pointer-events: none;
        }

        &:hover {
            span {
                border-color: ${theme.color.primary};
            }
        }

        ${isCompleted &&
        css`
            span {
            background-color: ${theme.color.blue};
            border-color: ${theme.color.blue};

            &:before {
                position: absolute;
                top: 10px;
                left: 4px;
                width: 8px;
                height: 14px;
                content: '';
                border-color: ${theme.color.white};
                border-style: solid;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg) translateY(-50%);
            }
        }
        `};
    `,
)

export const ContainerStyled = styled.div(
    ({ theme }) => css`
        max-width: 100%;
        padding: ${theme.gap.big};
        background-color: ${theme.color.white};

        @media ${theme.mediaQueries.queryXl} {
            width: ${theme.layout.default};
            margin: 0 auto;
        }
    `,
)
