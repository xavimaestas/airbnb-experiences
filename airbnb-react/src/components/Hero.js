import collage from '../images/photo-grid.png'

export default function Hero(){
    return (
        <main className="hero">
            <img src={collage} className="collage" alt="collage of photos from airbnb experiences"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activites led by one-of-a-kind hosts
                -all without leaving home. 
            </p>
        </main>
    )
}