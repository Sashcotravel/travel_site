import React, {useState} from 'react';
import s from "./Navbar.module.css";
import emailjs from "@emailjs/browser";


const PopAppWin = () => {

    const [dataInput, setDataInput] = useState({
        name: '', email: '', phone: ''
    });
    const [resObl, setResObl] = useState({
        прибуття: '', відправлення: '', ночей: '7', зірок: '1',
        людей: '1', вік: '', вилітВід: '', ВилітДо: ''
    });
    const [children, setChildren] = useState(false)

    const popApp = () => {
        document.getElementById('popApp').style.display = 'block'
        document.getElementById('popAppZan').style.display = 'block'
    }

    const close = (e) => {
        if(e.target.id === 'popApp2'){
            document.getElementById('popApp').style.display = 'none'
            document.getElementById('popAppZan').style.display = 'none'
            document.getElementById('thanks').style.display = 'none'
        }
    }

    const onChange = (e) => {
        if(e.target.title === 'phone'){
            if(e.target.value.length === 1){
                setDataInput((actual) => {
                    return { ...actual, [e.target.title]: '+' }})
            }
            else if(Number(e.target.value)){
                setDataInput((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})
            }
        } else {
            setDataInput((actual) => {
                return { ...actual, [e.target.title]: e.target.value }})
        }
    }

    const addNun = () => {
        if(document.getElementById('phone').value === ''){
            document.getElementById('phone').value = '+380'
        }
    }

    const submit = () => {
        let templateParams = {
            name: dataInput.name, email: dataInput.email, phone: dataInput.phone,
            прибуття: resObl.прибуття, відправлення: resObl.відправлення, ночей: resObl.ночей, ВилітДо: resObl.ВилітДо,
            зірок: resObl.зірок, людей: resObl.людей, вік: resObl.вік, вилітВід: resObl.вилітВід,
            дітиЄ: children === true ? 'Так' : 'Ні'
        }
        // royaltourdolyna@gmail.com
        if(dataInput.email){
            emailjs.send('service_u8vl2t5', 'template_fip8h4j', templateParams, 'CXxJKOzxav_w4kim9');
        }
        emailjs.send('service_u8vl2t5', 'template_zqr1peu', templateParams, 'CXxJKOzxav_w4kim9');
        console.log(templateParams)
        setDataInput((actual) => {
            return { ...actual, name: '', email: '', phone: '+380' }})
        document.getElementById('popAppZan').style.display = 'none'
        document.getElementById('thanks').style.display = 'flex'
    }

    const popAppClose = () => {
        document.getElementById('popApp').style.display = 'none'
        document.getElementById('thanks').style.display = 'none'
    }

    const toggleCheckbox = () => {
        if(children){
            setChildren(false)
            setResObl((actual) => {return { ...actual, вік: '' }});
        } else {
            setChildren(true)
        }
    }

    const select1 = (e) => {
        if(e.target.title === 'прибуття'){
            setResObl((actual) => {return { ...actual, прибуття: e.target.value }});
        }
        if(e.target.title === 'відправлення'){
            setResObl((actual) => {return { ...actual, відправлення: e.target.value }});
        }
        if(e.target.title === 'ВилітВід'){
            setResObl((actual) => {return { ...actual, вилітВід: e.target.value }});
        }
        if(e.target.title === 'ВилітДо'){
            setResObl((actual) => {return { ...actual, ВилітДо: e.target.value }});
        }
        if(e.target.title === 'ночей'){
            setResObl((actual) => {return { ...actual, ночей: e.target.value }});
        }
        if(e.target.title === 'зірок'){
            setResObl((actual) => {return { ...actual, зірок: e.target.value }});
        }
        if(e.target.title === 'людей'){
            setResObl((actual) => {return { ...actual, людей: e.target.value }});
        }
        if(e.target.title === 'вік'){
            setResObl((actual) => {return { ...actual, вік: e.target.value }});
        }
    }

    return (
        <div style={{display: 'flex'}}>

            <button onClick={popApp} className={s.popAppBut}>Замовити Тур</button>

            <div id='popApp' className={s.containerPopApp} onClick={close}>
                <div className={s.divBox} id='popAppZan'>
                    <span className={s.buttonX} id='popApp2' onClick={close}>&#x2715;</span>
                    <p>Отримати пропозицію</p>
                    <p className={s.pH2}>Введіть свої контактні дані і ми обов'язково зв'яжемося з вами.</p>
                    <input type="text" value={dataInput.name} placeholder="Введіть ім'я" className={s.input}
                           onChange={onChange} title='name' />
                    <input type="email" value={dataInput.email} placeholder="Введіть пошту" className={s.input}
                           onChange={onChange} title='email' />
                    <input type="text" value={dataInput.phone} placeholder="Введіть номер телефону" className={s.input}
                           onChange={onChange} onClick={addNun} title='phone' id='phone' />
                    <div className={s.boxContainer}>
                        <div className={s.divContry}>
                            <div className={s.w70}>
                                <p className={s.pH2}>Країна прибуття:</p>
                                <select id="country_to" autoComplete="off" title='прибуття'
                                        className={s.selectContry} onChange={select1}>
                                    <option hidden value="all" selected>Виберіть країну</option>
                                    <option value="Болгарія">Болгарія</option>
                                    <option value="Греція">Греція</option>
                                    <option value="Іспанія">Іспанія</option>
                                    <option value="ОАЕ">ОАЕ</option>
                                    <option value="Україна">Україна</option>
                                    <option value="Туреччина">Туреччина</option>
                                    <option value="Єгипет">Єгипет</option>
                                    <option value="Таїланд">Таїланд</option>
                                    <option value="Шрі Ланка">Шрі Ланка</option>
                                    <option value="Мальдіви">Мальдіви</option>
                                    <option value="Dominican Republi">Dominican Republic</option>
                                    <option value="Португалія">Португалія</option>
                                    <option value="Чорногорія">Чорногорія</option>
                                    <option value="Мексика">Мексика</option>
                                    <option value="Кіпр">Кіпр</option>
                                    <option value="Туніс">Туніс</option>
                                    <option value="Tanzania (Zanzibar)">Tanzania (Zanzibar)</option>
                                    <option value="Албанія">Албанія</option>
                                </select>
                            </div>
                            <div className={s.w50}>
                                <p className={s.pH2}>Місто відправлення:</p>
                                <select id="country_to" autoComplete="off" title='відправлення'
                                        className={s.selectContry} onChange={select1}>
                                    <option hidden value="all" selected>Виберіть місто:</option>
                                    <option value="Болгарія">Болгарія</option>
                                    <option value="Греція">Греція</option>
                                    <option value="Іспанія">Іспанія</option>
                                </select>
                            </div>
                        </div>
                        <div className={s.divContry}>
                            <div  className={s.w70}>
                                <p className={s.pH2}>Виліт від:</p>
                                <input type="date" className={s.dataPicet} onChange={select1} title='ВилітВід' />
                            </div>
                            <div  className={s.w50}>
                                <p className={s.pH2}>Дo:</p>
                                <input type="date" className={s.dataPicet} defaultValue={resObl.вилітВід} onChange={select1} title='ВилітДо' />
                            </div>
                        </div>
                        <div className={s.divContry}>
                            <div className={s.w70}>
                                <p className={s.pH2}>Кількість ночей:</p>
                                <select id="country_to" autoComplete="off" title='ночей'
                                        className={s.selectContry} onChange={select1}>
                                    <option value="7" selected>7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                </select>
                            </div>
                            <div className={s.w50}>
                                <p className={s.pH2}>Кількість зірок:</p>
                                <select id="country_to" autoComplete="off" title='зірок'
                                        className={s.selectContry} onChange={select1}>
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={s.boxContainer2}>
                        <div className={s.w70}>
                            <p className={s.pH2}>Кількість людей:</p>
                            <select id="country_to" autoComplete="off" title='людей'
                                    className={s.selectContry} onChange={select1}>
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                        <div className={s.w50+' '+s.childrenDiv}>
                            <div className={s.w130}>
                                <p className={s.pH2}>Діти:</p>
                                <label className={s.switch}>
                                    <input type="checkbox" className={s.checkbox} onClick={toggleCheckbox} />
                                        <div className={s.slider}></div>
                                </label>
                            </div>
                            {children && <div  className={s.w30}>
                                <p className={s.pH2}>Вік:</p>
                                <select id="country_to" autoComplete="off" title='вік'
                                        className={s.selectContry} onChange={select1}>
                                    <option value="0" selected>0</option>
                                    <option value="1">1</option>
                                    <option value="2-5">2-5</option>
                                    <option value="6-10">6-10</option>
                                    <option value="10-13">10-13</option>
                                    <option value="14-17">14-17</option>
                                </select>
                            </div>}
                        </div>
                    </div>
                    <button className={s.button} onClick={submit}>Надіслати</button>
                </div>
                <div className={s.thanksBox} id='thanks'>
                    <span className={s.buttonX2} id='popApp2' onClick={close}>&#x2715;</span>
                    <p>Запит успішно надіслано</p>
                    <p className={s.pH2}>Незабаром ми з Вами зв'яжемось.</p>
                    <p className={s.pH2}>Також ми відправили копію вашої заявки на Ваш e-mail, який Ви вказали.</p>
                    <button className={s.button} onClick={popAppClose}>Головна</button>
                </div>
            </div>

        </div>
    );
}

export default PopAppWin;