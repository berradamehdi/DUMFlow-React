import "./../styles/home.css"
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logo from "./../assets/DUMFlow_logo_transparent.png"

const Home = () => {
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
        </div>
    </>
  )
}

export default Home