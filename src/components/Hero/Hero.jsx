import './Hero.css';
import heroGif from '../../assets/hero.gif';
const Hero = () => {
    return (
        <div id="hero" className='section'>
            <div className='container'>
                <img src={heroGif} className="main-img" alt="Maxas"/>
                <h1 className='button'>
                    Minting Soon
                </h1>
            </div>
        </div>
    )
}
export default Hero;