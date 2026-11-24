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

const Home = () => {
    const [ tasks , setTasks ] = useState([])

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
                    <StatsOverview title={"Total Dossiers"} icon={<FolderOpenOutlinedIcon/>} color={"white"}/>
                    <StatsOverview title={"En cours"} icon={<AccessTimeOutlinedIcon/>} color={"blue"}/>
                    <StatsOverview title={"Urgents"} icon={<WarningAmberOutlinedIcon/>} color={"red"}/>
                    <StatsOverview title={"Validés"} icon={<Inventory2OutlinedIcon/>} color={"green"}/>
                </div>

                <CreateTaskForm icon={<InfoIcon sx={{fontSize : "15px"}}/>} tasks={tasks} setTasks={setTasks}/>
            </div>
        </>
  )
}

export default Home