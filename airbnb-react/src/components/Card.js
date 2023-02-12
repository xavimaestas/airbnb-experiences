
import star from "../images/star.png"


export default function Card(props){
    
    return (
       <section className="slider">
        <img src={`../images/${props.card.coverImg}`} className="katie" alt="katie"/>
            <div className="rating-section">
                <img src={star} className="red-star" alt="red star"/>
                <p className="rating-text">{props.card.stats.rating}<span>({props.card.stats.reviewCount})·{props.card.location}</span></p>
            </div>
            <div className="cost-description">
                <p>{props.card.title}</p>
                <p className="cost"><span>From ${props.card.price}</span>/ person</p>
            </div>
       </section>
    )
}

