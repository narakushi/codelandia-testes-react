import style from './index.module.css'

const Cards = ({date, title, content}) => {
    return(
        <div className={style.card}>
            <p>{date}</p>
            <div className={style.cardContent}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Cards;