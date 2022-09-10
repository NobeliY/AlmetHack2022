import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import MySelcet from '../components/UI/Select/MySelcet'
import Loader from '../components/UI/Loader/Loader'
import PostService from '../API/PostService'
import '../styles/request.css'

const RequestsPage = () => {
    const [value, setValue] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false)

    const [type, setType] = React.useState('');
    const [name, setName] = React.useState('');
    const [preview, setPreview] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [place, setPlace] = React.useState('');
    const [price, setPrice] = React.useState('0');
    const [organization_name, setOrganization_name] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [fName, setFname] = React.useState('');
    const [sName, setSname] = React.useState('');
    const [faName, setFaName] = React.useState('');

    const changeValue = event => {
        setValue(event.target.value);
        if (value == 2) {
            setPrice('0')
        }
    }

    const formSubmit = event => {
        event.preventDefault();
        const data = {
            type: type,
            name: name,
            preview: preview,
            description: description,
            full_name: `${fName} ${sName} ${faName}`,
            date: date,
            time: time,
            place: place,
            price: price,
            organization_name: organization_name,
            email: email,
            phone: phone
        }
        async function fetchData() {
            setIsLoading(true)
            const response = await PostService.postAdminLogin(data);
            setIsLoading(false)
        }
        fetchData()
    }

    const toLink = () => {
        return <Link to='/events'>Назад</Link>
    }

    return (
        <div>
            <Header>{toLink()}</Header>
            <div className='content manrope'>
                <form className='form'>
                    <div className='contentForm'>
                        <div className='contentForm__header'>
                            <h1>Предложить мероприятие</h1>
                            <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
                        </div>
                        <div className='selfForm'>
                            <div className='selfInfo'>
                                <h3>Личная информация:</h3>
                                <div className='fio'>
                                    <div className='fio__input'>
                                        <span>Имя:</span>
                                        <input type="text" onChange={(e) => setFname(e.target.value)}/>
                                    </div>
                                    <div className='fio__input'>
                                        <span>Фамилия:</span>
                                        <input type="text" onChange={(e) => setSname(e.target.value)}/>
                                    </div>
                                    <div className='fio__input'>
                                        <span>Отчество:</span>
                                        <input type="text" onChange={(e) => setFaName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='otherInfo'>
                                    <div className='otherInfo__input'>
                                        <span style={{ 'marginTop': '30px' }}>Email:</span>
                                        <input type="text" placeholder='you@example.com' onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className='otherInfo__input'>
                                        <span>Номер телефона:</span>
                                        <input type="text" placeholder='+78009438998' onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                    <div className='otherInfo__input'>
                                        <span>Название компании или организации:</span>
                                        <input type="text" placeholder='ПАО "Пример"' onChange={(e) => setOrganization_name(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='selfForm'>
                            <div className='selfInfo'>
                                <h3>Информация о мероприятии:</h3>
                                <div className='otherInfo'>
                                    <div className='otherInfo__input'>
                                        <span>Название мероприятия:</span>
                                        <input type="text" placeholder='' onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='otherInfo__input'>
                                        <span>Краткое описание мероприятия:</span>
                                        <textarea type="text" placeholder='' onChange={(e) => setDescription(e.target.value)}/>
                                    </div>
                                    <div className='otherInfo__footer'>
                                        <div className='footer__radio'>
                                            <span>Платно/Бесплатно:</span>
                                            <div className='radio__input'>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        value={1}
                                                        checked={value == '1' ? true : false}
                                                        onChange={changeValue}
                                                    />
                                                    <span>Платно</span>
                                                </div>
                                                <div>
                                                    <input type="radio"
                                                        value={2}
                                                        checked={value == '2' ? true : false}
                                                        onChange={changeValue}
                                                    />
                                                    <span>Бесплатно</span>
                                                </div>
                                            </div>
                                            <div className='fio__input'>
                                                <span>Дата мероприятия:</span>
                                                <input type="text" placeholder='' onChange={(e) => setDate(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='footer__radio'>
                                            {value == 1
                                                ? <div className='fio__input'>
                                                    <span>Цена:</span>
                                                    <input type="text" placeholder='' onChange={(e) => setPrice(e.target.value)}/>
                                                </div>
                                                : false
                                            }
                                            <div className='fio__input'>
                                                <span>Время мероприятия:</span>
                                                <input type="text" placeholder='' onChange={(e) => setTime(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='footer__radio'>
                                            <div className='fio__input'>
                                                <span>Краткое описание:</span>
                                                <input type="text" placeholder='' onChange={(e) => setPreview(e.target.value)}/>
                                            </div>
                                            <div className='fio__input'>
                                                <span>Тип мероприятия:</span>
                                                <input type="text" placeholder='' onChange={(e) => setType(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='footer__radio'>
                                            <div className='fio__input'>
                                                <span>Адрес:</span>
                                                <input type="text" placeholder='' onChange={(e) => setPlace(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contentForm__header'>
                            <button>{isLoading ? <Loader /> : "Войти"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default RequestsPage;