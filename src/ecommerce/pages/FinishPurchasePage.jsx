import '../assets/css/finishPurchase.css';


export const FinishPurchasePage = () => {

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
            atras
          </div>
        </div>
        <div className="open-form-btn-container">
          <button className='open-form-btn'>
            <i className='bi bi-plus'></i>
          </button>

        </div>
      </div>
    </>
  )
}
