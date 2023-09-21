export default function Header() {

    const logo = './images/logo.png';
    const logo_texto = './images/logo_texto.png';
    
    return (
        <div className="header-banner">
            <div className="logo-left">
                {/* Contenido del logo izquierdo */}
                <img src={logo} alt="Logo Izquierdo" style={{ width: '50%' }} />
            </div>
            <div className="logo-text-right">
                {/* Contenido del logo con texto a la derecha */}
                <div className="logo-text-container">
                    <img src={logo_texto} alt="Logo Derecho" />
                </div>
            </div>
        </div>
    )
}
