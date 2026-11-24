import { useState } from "react"
import "./../styles/taskList.css"
import CheckIcon from '@mui/icons-material/Check';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useId } from 'react';

const TaskList = ({tasks,setTasks}) => {
    const [ statusFilter , setStatusFilter ] = useState("tous")
    const [ regimeFilter , setRegimeFilter ] = useState("tous")
    const [ count , setCount ] = useState(0)
    const [info,setInfo] = useState("")
    const id = useId()

    const handleDelete = (reference , title) => {
        const copy = tasks.filter(element => element.referenceCode !== reference || element.title !== title)
        setTasks(copy) 
        localStorage.removeItem("tasks")
        localStorage.setItem("tasks",JSON.stringify(copy))
    }

    const handleCompleted = (reference , title) => {
        const copy = tasks.map(element => {
            if(element.referenceCode === reference && element.title === title) {  
                return {
                    ...element,
                    completed : !element.completed
                }
            }
            return element
        })
        setTasks(copy)
        localStorage.removeItem("tasks")
        localStorage.setItem("tasks",JSON.stringify(copy))
    }

    const handleTask = () => {
        if(statusFilter === "tous") {
            if(regimeFilter === "tous") {
                const list = tasks.map(element => element)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "import") {
                const list = tasks.filter(element => element.regime === "import")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "export") {
                const list = tasks.filter(element => element.regime === "export")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "at") {
                const list = tasks.filter(element => element.regime === "at")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "mainlevée") {
                const list = tasks.filter(element => element.regime === "mainlevée")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "documentation") {
                const list = tasks.filter(element => element.regime === "documentation")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
        }
        else if(statusFilter === "en cours") {
            if(regimeFilter === "tous") {
                const list = tasks.filter(element => element.completed === false)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                               <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "import") {
                const list = tasks.filter(element => element.regime === "import" && element.completed === false)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "export") {
                const list = tasks.filter(element => element.regime === "export" && element.completed === false)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                               <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div> 
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "at") {
                const list = tasks.filter(element => element.regime === "at" && element.completed === false)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                               <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div> 
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "mainlevée") {
                const list = tasks.filter(element => element.regime === "mainlevée" && element.completed === false)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "documentation") {
                const list = tasks.filter(element => element.regime === "documentation" && element.completed === false)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
        }
        else if(statusFilter === "urgents") {
            if(regimeFilter === "tous") {
                const list = tasks.filter(element => element.completed === false && element.priority === "urgent")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                               <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "import") {
                const list = tasks.filter(element => element.completed === false && element.regime === "import" && element.priority === "urgent")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "export") {
                const list = tasks.filter(element => element.completed === false && element.regime === "export" && element.priority === "urgent")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "at") {
                const list = tasks.filter(element => element.completed === false && element.regime === "at" && element.priority === "urgent")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "mainlevée") {
                const list = tasks.filter(element => element.completed === false && element.regime === "mainlevée" && element.priority === "urgent")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "documentation") {
                const list = tasks.filter(element => element.completed === false && element.regime === "documentation" && element.priority === "urgent")
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
        }
        else if(statusFilter === "terminés") {
            if(regimeFilter === "tous") {
                const list = tasks.filter(element => element.completed === true)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "import") {
                const list = tasks.filter(element => element.regime === "import" && element.completed === true)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "export") {
                const list = tasks.filter(element => element.regime === "export" && element.completed === true)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "at") {
                const list = tasks.filter(element => element.regime === "at" && element.completed === true)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "mainlevée") {
                const list = tasks.filter(element => element.regime === "mainlevée" && element.completed === true)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
            else if(regimeFilter === "documentation") {
                const list = tasks.filter(element => element.regime === "documentation" && element.completed === true)
                setCount(list.length)
                return (
                    <>
                        {list.map(element => {
                            return (
                                <div className="task-list">
                                    <div className={element.completed ? "task-card task-card-completed" : "task-card"}>
                                        <button className={element.completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => {
                                            handleCompleted(element.referenceCode,element.title)
                                        }}> { element.completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                                        
                                        <div className="task-card__content">
                                            <div className="task-card__meta">
                                                <div className="task-card__badges">
                                                    <div className="task-card__badge"> {element.referenceCode} </div>
                                                    <div className="task-card__badge--regime"> {element.regime} </div>
                                                    {!element.completed && element.priority === "urgent" && <div className="task-card__badge--urgent"> {element.priority} </div>}
                                                </div>
                                                <div className="date"> {element.date} </div>
                                            </div>

                                            <span className={element.completed ? "task-card__title task-card__title-completed" : "task-card__title"}> {element.title} </span>

                                            {element.notes !== "" && <>
                                                <button className="task-card__details-toggle" onClick={() => {
                                                    if(info === element.title) {
                                                        setInfo("")
                                                    }
                                                    else {
                                                        setInfo(element.title)
                                                    }
                                                }}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>
                                                {info === element.title && <div className="task-card__notes"> {element.notes} </div>}
                                            </>}
                                        </div>

                                        <div className="btn-op">
                                            {/* <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button> */}
                                            <button className="btn btn-delete" onClick={() => handleDelete(element.referenceCode,element.title)}> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            }
        }
    }

    return (
        <>
            <div className="taskList">
                <div className="filter-bar">
                    <div className="task-filters__top">
                        <div className="task-filters__tabs">
                            <button className={statusFilter === "tous" ? "task-filters__tab task-filters__tab--active" : "task-filters__tab"} onClick={() => setStatusFilter("tous")}> Tous </button>
                            <button className={statusFilter === "en cours" ? "task-filters__tab task-filters__tab--active" : "task-filters__tab"} onClick={() => setStatusFilter("en cours")}> En Cours </button>
                            <button className={statusFilter === "urgents" ? "task-filters__tab task-filters__tab--active-red" : "task-filters__tab"} onClick={() => setStatusFilter("urgents")}> Urgents </button>
                            <button className={statusFilter === "terminés" ? "task-filters__tab task-filters__tab--active-green" : "task-filters__tab"} onClick={() => setStatusFilter("terminés")}> Terminés </button>
                        </div>
                        <div className="task-filters__count">
                            <span className="value"> {count} </span> dossiers affichés
                        </div>
                    </div>
                    
                    <div className="task-filters__regimes">
                        <button className={regimeFilter === "tous" ? "task-filters__chip task-filters__chip--active" : "task-filters__chip"} onClick={() => setRegimeFilter("tous")}> Tous </button>
                        <button className={regimeFilter === "import" ? "task-filters__chip task-filters__chip--active" : "task-filters__chip"} onClick={() => setRegimeFilter("import")}> Import </button>
                        <button className={regimeFilter === "export" ? "task-filters__chip task-filters__chip--active" : "task-filters__chip"} onClick={() => setRegimeFilter("export")}> Export </button>
                        <button className={regimeFilter === "at" ? "task-filters__chip task-filters__chip--active" : "task-filters__chip"} onClick={() => setRegimeFilter("at")}> At </button>
                        <button className={regimeFilter === "mainlevée" ? "task-filters__chip task-filters__chip--active" : "task-filters__chip"} onClick={() => setRegimeFilter("mainlevée")}> Mainlevée </button>
                        <button className={regimeFilter === "documentation" ? "task-filters__chip task-filters__chip--active" : "task-filters__chip"} onClick={() => setRegimeFilter("documentation")}> Documentation </button>
                    </div>
                </div>

                { handleTask() }

            </div>
        </>
    )
}

export default TaskList