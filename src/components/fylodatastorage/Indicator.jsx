import React, {useEffect} from 'react';
import "./Indicator.css";

function Indicator(props) {
    useEffect(() => {
        const section = document.querySelector('section.indicator');
        section.style.setProperty("--current-storage", props.currentStorage);
        section.style.setProperty("--total-storage", props.totalStorage);
    })
    return (
        <section className="indicator">
            <header>
                <img src="public/images/fylodatastorage/logo.svg"/>
                <ul>
                    <li><img src="public/images/fylodatastorage/file.svg" /></li>                
                    <li><img src="public/images/fylodatastorage/folder.svg" /></li>
                    <li><img src="public/images/fylodatastorage/upload.svg" /></li>
                </ul>
            </header>
            <main>
                <p className="message">You've used <span className="currentStorageHolder">{props.currentStorage} GB</span> of your storage</p>
                <section className="capacity">
                    <div className='slider'>
                        <div className="backdrop">
                            <div className="ball"></div>
                        </div>
                    </div>
                    <p><span>0 GB</span><span>1000 GB</span></p>
                </section>       
            </main>
            <label>
                <p><span>{props.totalStorage - props.currentStorage}</span>GB LEFT</p>
            </label>
        </section>
    )
}

export default Indicator;