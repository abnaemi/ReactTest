import Todo from "./Todo";

type TodoListProps = {
    todosToShow: string[]
}

export default function TodoList(props: TodoListProps){
    return (
        <div>
            <h1>Todos</h1>

            {props.todosToShow.map((todo) => {
                    return (<div> <Todo todoToShow={todo}/></div>
                    )
                }
            )}
        </div>

    )

}