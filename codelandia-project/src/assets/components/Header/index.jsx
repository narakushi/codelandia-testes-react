import style from './index.module.css'

function Header(){
    return (
        <div className={style.mainContainer}>
            <div className={style.mainContent}>
                <header className={style.header}>
                    <h1><a href="#">Codelandia</a></h1>
                    <h2><a href="#">blog</a></h2>
                </header>
                <div className={style.search}>
                    <input type="text" name="" id="" />
                </div>
            </div>
        </div>
    );
}

export default Header;