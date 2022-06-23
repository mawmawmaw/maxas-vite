import './About.css';
import doodle from './doodle.svg';
const About = () => {
    return (
        <div id="about" className='section'>
            <div className='container'>
                <h2 className='section-title'>About</h2>
                <div className='content grid left'>
                    <img src={doodle} alt="doodle" width="300"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra interdum vestibulum. Etiam condimentum elementum augue quis lobortis. Sed imperdiet congue libero, non elementum orci condimentum non. Duis eget urna tempor elit tincidunt porta. Integer vestibulum mauris nunc, eget accumsan sem fringilla nec. Cras fermentum, risus euismod elementum vulputate, nisi felis cursus odio, non lacinia lacus dolor quis nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla at porta est. Ut nunc mauris, fringilla vitae tortor non, placerat imperdiet tellus. Suspendisse ante nibh, vehicula ut finibus eu, aliquet a lorem. Proin maximus orci sit amet est cursus, at aliquam sem pretium. Cras vel odio lacinia, egestas sapien ut, egestas est. Nullam ornare dictum erat quis fringilla.</p>
                </div>
            </div>
        </div>
    )
}
export default About;