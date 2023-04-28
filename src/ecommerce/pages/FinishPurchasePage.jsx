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
            <p>Número tarjeta</p>
            <p>1232 3423 3232</p>
          </div>
          <div className="card_name-container">
            <div className='first'>
              <p>Nombre tarjeta</p>
              <p>Joaquin robloxiano</p>
            </div>
            <div className="card__expiration">
              <p>Expiración</p>
              <p>12/24</p>
            </div>
          </div>
        </div>
        <div className="back__card">
          <div className="magnetic-band"></div>
          <div className="security-code-more-container">
            atras
          </div>
        </div>
      </div>
    </>
  )
}
