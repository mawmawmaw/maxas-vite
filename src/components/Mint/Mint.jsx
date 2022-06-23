import { useEffect, useState } from 'react';
import './Mint.css';
const Mint = () => {
    const [area, setArea] = useState();
    const [phone, setPhone] = useState();
    const [counter, setCounter] = useState('Loading...');
    const [registered, setRegistered] = useState(false);
    const [registering, setRegistering] = useState(false);
    const [error, setError] = useState(false);
    const initCounter = () => {
        var countDownDate = new Date("Jul 2, 2022 18:30:00").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCounter(days + "d " + hours + "h " + minutes + "m " + seconds + "s ") ;
            if (distance < 0) {
                clearInterval(x);
                setCounter('00:00:00')
            }
        }, 1000);
    }
    useEffect(()=>{
        initCounter();
    },[])
    const registerPhone = (e) => {
        e.preventDefault();
        setRegistering(true);
        if(e.target[0].value !== '' && e.target[1].value !== ''){
            let fullPhoneNumber = '+' + e.target[0].value + e.target[1].value;
            console.log(fullPhoneNumber);
        }
    }
    const renderRegistration = () => {
        if (error) {
            return  <p>Sorry, something went wrong. Please reload.</p>
        }
        if (registered) {
            return  <p>Thank you for registering!</p>
        }
        return (<>
            <p>To be able to mint during the free pre-mint, please register your phone number here:</p>
            <form className='register' onSubmit={e=>registerPhone(e)} method="POST">
                <div className='input-container'>
                    <label htmlFor="area">Area Code</label>
                    <input type="number" id="area" name="area" placeholder='+52' required value={area} onChange={(e)=>setArea(e.target.value)}/>
                </div>
                <div className='input-container'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone" name="phone" placeholder='55 5555 5555' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <button type='submit' className='button' disabled={registering}>{registering ? 'Registering' : 'Register'}</button>
            </form>
            </>)
    }
    return (
        <div id="mint" className='section'>
            <div className='container'>
                <h2 className='counter'>{counter}</h2>
                <h2 className='section-title'>Pre-Mint Registration</h2>
                {renderRegistration()}
            </div>
        </div>
    )
}
export default Mint;