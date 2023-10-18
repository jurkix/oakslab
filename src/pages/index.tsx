import RandomFact from 'components/RandomFact'
import TodoList from 'components/TodoList'
import { ContainerStyled } from 'components/TodoList/TodoList.style'
import defaultSectionData from 'dummyData/sectionData.json'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React, { useMemo } from 'react'

const IndexPage: NextPage = () => {
    const { t } = useTranslation('common')

    const [sectionsData, setSectionsData] = useLocalStorage('sectionsData', defaultSectionData)
    const memoizedSectionsData = useMemo(() => sectionsData, [sectionsData])
    const isLastSectionCompleted = memoizedSectionsData[memoizedSectionsData.length - 1].initialTodos.every(
        (todo) => todo.completed,
    )

    const isPreviousSectionCompleted = (index: number) => {
        return index > 0 ? memoizedSectionsData[index - 1].initialTodos.every((todo) => todo.completed) : true
    }

    const updateTodoCompleted = (sectionUid: string, todoUid: string) => {
        const updatedSectionsData = sectionsData.map((section) => {
            if (section.uid === sectionUid) {
                return {
                    ...section,
                    initialTodos: section.initialTodos.map((todo) => {
                        if (todo.uid === todoUid) {
                            return {
                                ...todo,
                                completed: !todo.completed,
                            }
                        }
                        return todo
                    }),
                }
            }
            return section
        })

        setSectionsData(updatedSectionsData)
    }

    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <ContainerStyled>
                <h1>{t('title')}</h1>
                {memoizedSectionsData.map((section, index) => (
                    <TodoList
                        key={section.uid}
                        uid={section.uid}
                        number={index + 1}
                        title={section.title}
                        data={section.initialTodos}
                        isPreviousCompleted={isPreviousSectionCompleted(index)}
                        updateTodoCompleted={updateTodoCompleted}
                    />
                ))}

                {isLastSectionCompleted && <RandomFact />}
            </ContainerStyled>
        </>
    )
}

export default IndexPage
