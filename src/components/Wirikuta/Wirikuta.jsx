import './Wirikuta.css';
import iconWithMask from '../../assets/maxas_icon_big.png';
const Wirikuta = () => {
    return (
        <div id="wirikuta" className='section'>
            <div className='container'>
                <h2 className='section-title'>Wirikuta</h2>
                <div className='content grid right'>
                    <p>Pellentesque ultrices rutrum ultrices. Proin ac tortor vitae nulla tincidunt molestie. Aliquam mollis ante eu orci commodo pharetra. Nunc egestas fringilla lobortis. Aliquam est dui, rhoncus tincidunt porttitor eget, vestibulum lacinia quam. Suspendisse eu tortor mi. Morbi vel gravida neque. Suspendisse vel tempus nibh. Phasellus feugiat, lorem in hendrerit dictum, leo risus ultricies quam, at dapibus massa sapien at augue. Integer ipsum urna, mattis vitae elit in, fermentum tristique ex. Quisque at interdum turpis. Vivamus eleifend eleifend rhoncus. Quisque convallis est et sapien accumsan, in porttitor arcu hendrerit.</p>
                    <img src={iconWithMask} alt="doodle" width="300"/>
                </div>
            </div>
        </div>
    )
}
export default Wirikuta;