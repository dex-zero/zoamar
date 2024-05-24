import cardPromo from '../assets/card-promoção.jpeg'

export function HomePage(){ 
    return(
        <div className="items-center">
            <img src={cardPromo} alt="card" />
        </div>
    )
}