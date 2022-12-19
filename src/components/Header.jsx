const Header=(props)=>{
    return(
        <div className="header container-fluid p-2 d-flex justify-content-between align-items-center">
            <h1 className="fs-2">{props.title}</h1>
            <a className="text-light" href="http://mattcuadros.github.io" target="{_blank}">Mi portafolio</a>
        </div>
    )
}

export default Header;