import './css/Home.css';
import texts from '../texts/texts.json';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';


function Home() {
    return (
        <div className="hero">
            <div className='content'>
                <div className='header'>
                    <Navbar/>
                </div>
                <div className='body'>
                    <div className='body--logo'>
                        <Logo/>
                    </div>
                    <h1 className='body--title'> {texts.title} </h1>
                    {/* <p> {texts.intro}</p> */}
                </div>   
            </div>
        </div>
     
    );
  }
  
  export default Home;