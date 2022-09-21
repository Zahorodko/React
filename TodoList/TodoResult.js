import { ExecutionLine } from './TodoList.style';

export const TodoResult = (props) => {
    return(
        <ExecutionLine>
            <p>Tasks for today : <span style={{color:'#f55f5f'}}>{props.todo.length}</span></p>
            <p>Complete : <span style={{color:'#cdc737'}}>{props.count}</span></p>
            <p>Still : <span style={{color:'red'}}>{props.todo.length-props.count}</span></p>
        </ExecutionLine>
    )
}