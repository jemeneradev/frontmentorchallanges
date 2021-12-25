import Card from './Card.jsx'
import './Cards.css'

export default function Cards({models}) {
    const content = models.map((card,i) => 
        <li key={i} className={"cards__item"}>
            <Card {...card} lastChild={i===models.length-1}/>
        </li>
        );
    return (
    <ul className={"cards"}>
        {content}
    </ul>
    )
}