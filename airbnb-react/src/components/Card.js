import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(){
    return (
       <section className="slider">
        <img src={katie} className="katie" alt="Katie Zaferes"/>
            <div className="rating-section">
                <img src={star} className="red-star" alt="red star"/>
                <p className="rating-text">5.0<span>(6)·USA</span></p>
            </div>
            <div className="cost-description">
                <p>Life lessons with Katie Zaferes</p>
                <p className="cost"><span>From $136</span>/ person</p>
            </div>
       </section>
    )
}