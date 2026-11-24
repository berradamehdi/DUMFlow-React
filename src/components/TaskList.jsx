import { useState } from "react"
import "./../styles/taskList.css"

const TaskList = () => {
    const [ statusFilter , setStatusFilter ] = useState("tous")
    const [ regimeFilter , setRegimeFilter ] = useState("tous")
    return (
        <>
            <div className="taskList">
                <div className="filter-bar">
                    <div className="task-filters__top">
                        <div className="task-filters__tabs">
                            <buttom className={statusFilter === "tous" ? "task-filters__tab task-filters__tab--active" : "task-filters__tab"} onClick={() => setStatusFilter("tous")}> Tous </buttom>
                            <buttom className={statusFilter === "en cours" ? "task-filters__tab task-filters__tab--active" : "task-filters__tab"} onClick={() => setStatusFilter("en cours")}> En Cours </buttom>
                            <buttom className={statusFilter === "urgents" ? "task-filters__tab task-filters__tab--active-red" : "task-filters__tab"} onClick={() => setStatusFilter("urgents")}> Urgents </buttom>
                            <buttom className={statusFilter === "terminés" ? "task-filters__tab task-filters__tab--active-green" : "task-filters__tab"} onClick={() => setStatusFilter("terminés")}> Terminés </buttom>
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
            </div>
        </>
    )
}

export default TaskList