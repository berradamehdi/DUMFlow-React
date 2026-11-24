import { useState } from "react"
import "./../styles/taskList.css"
import CheckIcon from '@mui/icons-material/Check';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
    const [ statusFilter , setStatusFilter ] = useState("tous")
    const [ regimeFilter , setRegimeFilter ] = useState("tous")
    const [ completed , setCompleted ] = useState(false)
    const [ info , setInfo ] = useState(false)

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
                            <span className="value"> 0 </span> dossiers affichés
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

                <div className="task-empty">
                    <div className="message-title"> Aucun dossier trouvé </div>
                    <div className="message-desc"> Modifie tes filtres ou ajoute une nouvelle tâche douane ci-dessus. </div>
                </div>

                <div className="task-list">
                    <div className="task-card">
                        <button className={completed ? "task-card__checkbox task-card__checkbox-selected" : "task-card__checkbox"} onClick={() => setCompleted(!completed)}> { completed ? <CheckIcon sx={{fontSize:"12px"}}/> : "" } </button>
                        
                        <div className="task-card__content">
                            <div className="task-card__meta">
                                <div className="task-card__badges">
                                    <div className="task-card__badge"> DUM-6265 </div>
                                    <div className="task-card__badge--regime"> import </div>
                                    <div className="task-card__badge--urgent"> Urgent </div>
                                </div>
                                <div className="date"> 24/11/2026 </div>
                            </div>

                            <span className="task-card__title"> Saisie DUM sur système BADR & contrôle valeur </span>

                            <button className="task-card__details-toggle" onClick={() => setInfo(!info)}> <TextSnippetIcon sx={{fontSize:"16px",color:"var(--accent-blue)"}}/> Voir les infos enregistrées </button>

                            {info && <div className="task-card__notes"> Client: AtlasTextiles SARL | Code SH: 5208.32... </div>}
                        </div>

                        <div className="btn-op">
                            <button className="btn btn-edit"> <EditIcon sx={{fontSize:"14px"}}/> </button>
                            <button className="btn btn-delete"> <DeleteIcon sx={{fontSize:"14px"}}/> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskList