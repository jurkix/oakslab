import { TitleStyled, TodoItemStyled, TodoListStyled } from './TodoList.style'
import { FC } from 'react'

type Todo = {
    uid: string
    text: string
    completed: boolean
}

type TodoListProps = {
    uid: string
    number: number
    title: string
    data: Todo[]
    isPreviousCompleted: boolean
    updateTodoCompleted: (sectionUid: string, todoUid: string) => void
}

const TodoList: FC<TodoListProps> = ({ uid, number, title, data, isPreviousCompleted, updateTodoCompleted }) => {
    const allCompleted = data.every((todo) => todo.completed)
    const lastCompletedIndex = data
        .map((todo, index) => ({ completed: todo.completed, index }))
        .filter((todo) => todo.completed)
        .reduce((acc, todo) => (todo.index > acc ? todo.index : acc), -1)

    return (
        <TodoListStyled>
            <TitleStyled isCompleted={allCompleted && (isPreviousCompleted || number === 0)}>
                <span>{number}</span>
                {title}
            </TitleStyled>
            {data.map((todo, index) => (
                <TodoItemStyled
                    key={todo.uid}
                    onClick={() => {
                        if (index === lastCompletedIndex + 1 || index === lastCompletedIndex) {
                            updateTodoCompleted(uid, todo.uid)
                        }
                    }}
                    isCompleted={todo.completed}
                    isClickable={index === lastCompletedIndex + 1 || index === lastCompletedIndex}>
                    <span />
                    {todo.text}
                </TodoItemStyled>
            ))}
        </TodoListStyled>
    )
}

export default TodoList
