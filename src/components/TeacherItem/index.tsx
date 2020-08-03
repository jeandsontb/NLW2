import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent-for1-1.xx.fbcdn.net/v/t31.0-0/p180x540/27908062_335156586975662_7849652321345981327_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_ohc=mRA5wAk4kNAAX_kXUkG&_nc_ht=scontent-for1-1.xx&_nc_tp=6&oh=42beea5628721773e91eaef7d390d52e&oe=5F4D9704" alt="Avatar"/>
                <div>
                    <strong>Jeandson Tenorio</strong>
                    <span>Informática</span>
                </div>
            </header>
            <p>
            Entusiasta por tecnologias avançadas.
            <br/><br/>
            Apaixonado por teconolgias de uso multiplataforma, com muitas opções de código
            para quebrar realmente a cabeça do indivíduo quando achar que as coisas são
            fáceis de serem realizadas.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button" >
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;