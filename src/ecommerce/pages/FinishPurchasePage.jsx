import { useRef } from 'react';
import '../assets/css/finishPurchase.css';


export const FinishPurchasePage = () => {
  const openFormBtn = useRef();
  const exampleNameOfIndividual = 'Hugues Antoine de la Baudry'
  
  const onFormOpen = () => {
    openFormBtn.current.classList.toggle('active')
  };
  
  const onCardClick = (e) => {
    e.target.closest('.card').classList.remove('active')
    if ( e.target.closest('.card__back') ) {
      e.target.closest('.card__back').classList.remove('active');
    }
  }
  return (
    <>
            <div className="card">
        <div className="front__card">
          <div className="mastercard__img">
            <img src="/assets/mastercard.png" alt="master card imagen" />
          </div>
          <div className="visa__img">
            <img src="/assets/chip.tarjeta.png" alt="chip de la tarjeta" className='card-img' />
            <img src="/assets/visa.png" alt="visa image" className='card-img' />
          </div>
          <div className="card__number">
            <p className='text-principal'>Número tarjeta</p>
            <p className='text-value text-card-numbers'>1232 3423 3232 2323</p>
          </div>
          <div className="card_name-container">
            <div className='first'>
              <p className='text-principal'>Nombre tarjeta</p>
              <p className='text-value'>Hugues Antoine de la Baudry</p>
            </div>
            <div className="card__expiration">
              <p className='text-principal expiration'>Expiración</p>
              <p className='text-value'>12/24</p>
            </div>
          </div>
        </div>
        <div className="back__card">
          <div className="magnetic-band"></div>
          <div className="security-code-more-container">
            <div className="firma-ccv">
              <div className="firma"></div>
              <div className="ccv"><p></p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="open-form-btn-container">
        <button className='open-form-btn' ref={openFormBtn} onClick={onFormOpen}>
          <i className='bi bi-plus'></i>
        </button>
        <div className='form-container'>
        <form action="" className='form'>
          <div className="first-second">
            <div className="first-form">
              <label htmlFor="cardNumbers">Numeros de la tarjeta</label>
              <input
                type="text"
                id='cardNumbers'
                name='cardNumbers'
                placeholder='3232 3232 3232 2323'
              />
            </div>
            <div className="second-form">
              <label htmlFor="nameOfIndividual">Nombre del propietario </label>
              <input
                type="text"
                placeholder={exampleNameOfIndividual}
                name="nameOfIndividual"
                id="nameOfIndividual"
              />

            </div>
          </div>
          <label htmlFor="expirationDate">Fecha de expiración</label>
          <input
            type="text"
            id='expirationDate'
            name='expirationDate'
            placeholder='mm/yy'
          />
        </form>
      </div>
      </div>
      
    </>
  )
}
