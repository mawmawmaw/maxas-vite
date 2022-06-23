import './Context.css';
import doodle from './doodle.svg';
const Context = () => {
    return (
        <div id="context" className='section'>
            <div className='container'>
                <h2 className='section-title'>Context</h2>
                <div className='content grid left'>
                    <img src={doodle} alt="doodle" width="300"/>
                    <p>Nullam in varius felis. Duis sit amet placerat felis, sit amet ullamcorper libero. Proin elementum nisl vitae est tristique, a vulputate risus pharetra. Cras lacinia lacus eget arcu consectetur dictum. Phasellus mollis rutrum ligula, ut tristique massa vehicula vel. Cras dictum erat suscipit tincidunt efficitur. Sed interdum porttitor magna, nec ultrices turpis tincidunt eu. Ut vitae accumsan mi. Duis nulla enim, fringilla at accumsan quis, mattis at velit. Vestibulum pulvinar velit vitae arcu venenatis congue. Mauris molestie ligula id posuere mollis. Morbi sit amet ipsum urna.</p>
                </div>
            </div>
        </div>
    )
}
export default Context;