type TodoListProps = {
    todosToShow: string[]
}

export default function TodoList(props: TodoListProps){
    return (
        <div>
            <h1>Todos</h1>
            {props.todosToShow[0]}
        </div>

    )

}