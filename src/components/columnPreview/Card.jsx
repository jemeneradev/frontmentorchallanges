import './Card.css'

export default function Card(props) {
    console.log(props)
    const imgsrc = `public/images/columnpreview/${props.type}.svg`
    const imgalt = `${props.type} car`
    const bcolor = `${props.bcolor}`
    const cardClass = `card ${props.lastChild ? "card--last":""}`
    return (
    <div className={cardClass} style={{backgroundColor:bcolor}}>
        <div className="card__logo">
            <img src={imgsrc}  alt={imgalt} width="74" height="52" style={{textTransform:"capitalize"}}/>
        </div>
        <h2 className="card__title">
          {props.type}
        </h2>
        
        <p className="card__desc">{props.desc}</p>
        <button className="learn">
            <a className="learn_a" style={{color:bcolor}}>Learn More</a>
        </button>
    </div>
    )
}