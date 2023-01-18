import logo from '../../images/logo.png';
import usa from '../../images/best-in-usa.png';
import idaho from '../../images/located-in-idaho.png';
import trust from '../../images/mmx-mobile-trust-header-icons.png';

const LogoBar = () => {
  return (
    <div className="logo-bar-container">
        <div>
            <img className='logo-img' src={logo} alt="Money Metals Exchange Logo" />
        </div>
        <div>
            <h2>1-800-800-1865 (Mon-Sat) | Online 24/7</h2>
            <div>
                <input type="text" placeholder="search" />
                <button>Search</button>
            </div>
        </div>
        <div>
            <img className='investopedia-img' src={usa} alt="Named Best In USA By Investopedia" />
            <img className='idaho-img' src={idaho} alt="Located In Beautiful Idaho" />
            <img className='verisign-bitcoin-img' src={trust} alt="Verisign Secured and We Accept Bitcoin" />
        </div>
    </div>
  )
}

export default LogoBar