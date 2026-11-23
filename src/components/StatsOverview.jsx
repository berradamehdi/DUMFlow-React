import "./../styles/statsOverview.css"

const StatsOverview = ({title , icon , color}) => {
    const statCard = color === "white" ? "stat-card stat-card-white" : ( color === "blue" ? "stat-card stat-card-blue" :  ( color === "red" ? "stat-card stat-card-red" : "stat-card stat-card-green") )
    const valueCard = color === "white" ? "value-card value-card-white" : ( color === "blue" ? "value-card value-card-blue" :  ( color === "red" ? "value-card value-card-red" : "value-card value-card-green") )
    const boxIcon = color === "white" ? "box-icon box-icon-white" : ( color === "blue" ? "box-icon box-icon-blue" :  ( color === "red" ? "box-icon box-icon-red" : "box-icon box-icon-green") )
    return (
        <>
            <div className={statCard}>
                <div className={"left-stat-card"}>
                    <span className="title-card"> {title} </span>
                    <div className={valueCard}> 0 </div>
                </div>
                <div className={boxIcon}>
                    {icon}
                </div>
            </div>
        </>
  )
}

export default StatsOverview