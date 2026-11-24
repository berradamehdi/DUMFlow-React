import "./../styles/home.css"
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoIcon from '@mui/icons-material/Info';
import logo from "./../assets/DUMFlow_logo_transparent.png"
import StatsOverview from "../components/StatsOverview";
import CreateTaskForm from "../components/CreateTaskForm";
import { useState } from "react";
import TaskList from "../components/TaskList";

const Home = () => {
    const [ tasks , setTasks ] = useState(() => JSON.parse(localStorage.getItem("tasks")) || [])
    const [ task , setTask ] = useState(() => tasks.length > 0 ? tasks.length : 0)
    const [ enCour , setEnCour ] = useState(() => tasks.length > 0 ? tasks.filter(element => element.completed == false).length : 0)
    const [ urgent , setUrgent ] = useState(() => tasks.length > 0 ? tasks.filter(element => element.priority == "urgent").length : 0)
    const [ full , setFull ] = useState(() => tasks.length > 0 ? tasks.filter(element => element.completed == true).length : 0)

    return (
        <>
            <div className="container">
                <div className="app-header">
                    <div className="header-title">
                        <div className="info-border">
                            <LocalShippingOutlined />
                            Espace Transitaire & Déclaration en Douane
                        </div>
                        <div className="box-logo">
                            <img src={logo} alt="logo"  className="logo"/>
                        </div>
                        <div className="desc-logo"> Organise tes DUM, BL, codes SH et démarches douanières en un seul endroit </div>
                    </div>

                    <div className="header-search">
                        <SearchIcon />
                        <input type="text" placeholder="Rechercher par N° DUM, BL, Code SH ou note..."/>
                    </div>

                    <div className="boder-bottom"></div>
                </div>

                <div className="stats-grid">
                    <StatsOverview title={"Total Dossiers"} icon={<FolderOpenOutlinedIcon/>} color={"white"} value={task}/>
                    <StatsOverview title={"En cours"} icon={<AccessTimeOutlinedIcon/>} color={"blue"} value={enCour}/>
                    <StatsOverview title={"Urgents"} icon={<WarningAmberOutlinedIcon/>} color={"red"} value={urgent}/>
                    <StatsOverview title={"Validés"} icon={<Inventory2OutlinedIcon/>} color={"green"} value={full}/>
                </div>

                <CreateTaskForm icon={<InfoIcon sx={{fontSize : "15px"}}/>} tasks={tasks} setTasks={setTasks} setTask={setTask} setEnCour={setEnCour} setUrgent={setUrgent}/>

                <TaskList />

                <div className="footer">
                    <div className="border-line"></div>
                    <div className="info"> DUMFlow — Conçu pour le suivi quotidien des déclarations en douane & transit • Sauvegarde locale automatique </div>
                    <div className="by"> © 2026 Berrada Mehdi · V0.1.0 </div>
                </div>
            </div>
        </>
  )
}

export default Home