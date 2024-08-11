import { useState } from 'react'
import { MdAdd } from "react-icons/md";
import { CiSquareRemove, CiEdit } from "react-icons/ci";

import './TaskList.css'


const TaskList = () => {

    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [tarefaEditar, setTarefaEditar] = useState('');
    const [indice, setIndice] = useState('');

    const addTask = () => {
        if(tarefaEditar !== '') {
            const todas = [...tarefas]
            todas[indice] = tarefaEditar
            setTarefas(todas)
            setTarefaEditar('')

        }
        else{
            setTarefas([...tarefas, novaTarefa])
            setNovaTarefa('')
        }
        
    }

    const editTask = (index) => {

        setTarefaEditar(tarefas[index])
        setIndice(index)

    }

    const deleteTask = (index) => {
        const todas = [...tarefas];
        todas.splice(index, 1);
        setTarefas(todas)
    }

  return (
    <>
    <div className="addElement">
        <h1>Lista de Tarefas</h1>
        <div className="inpTarefa">
            <input type="text" placeholder='Adicione uma tarefa' value={tarefaEditar !== '' ? tarefaEditar : novaTarefa} onChange={tarefaEditar !== '' ? (e) => setTarefaEditar(e.target.value) : (e) => setNovaTarefa(e.target.value)}/>
            <button onClick={addTask}><MdAdd className='buttonAdd'/></button>
        </div>
        
    </div>
    <div className="taskList">

        <ul>
            {tarefas.map((tarefa, index) => <li key={index}><span>{tarefa}</span> <span><CiEdit onClick={() => editTask(index)}/><CiSquareRemove onClick={() => deleteTask(index)}/></span></li>)}
        </ul>
    </div>
    </>
  )
}

export default TaskList