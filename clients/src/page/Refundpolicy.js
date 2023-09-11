import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useEffect } from 'react';
import '../style/About.css';



const RefundPolicy = ({scroll}) => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  const header = document.querySelector('.headerEvent')

  if(scroll >= 28) {
      header?.classList.add('header_scrolled')
  }else {
      header?.classList.remove('header_scrolled')

  }

  return (
    <>

      <section className="policy-wrapper">
        <div className="main-terms">
          <div className="terms">
            <div className='me-2'>
              <Link to="/" className="text-black"><i class="fas fa-home"></i>  Home</Link> > Refund Policy
            </div>
            <div className='container-title'>
                <h2>Refund Policy</h2>
            </div>

            <div className='container-policy'>
                <p className='text-black'>
                  <h3>Refund Policy</h3>
                  Please read the following carefully, 
                  then send us a refund request by creating a ticket in the support section.
                </p>
            </div>

            <div className='container-policy'>
                <p className='text-black'>
                  <h3>Requests for Refund must be clear and acceptable:</h3>
                  √ Before you buy, be sure to request a trial account. We have set up a trial account so that you can test it and if you are not satisfied, do not buy a long-term service.<br></br>

                  √ If your internet speed is slow, you will not be able to see and use our DiGiPro services and then request a refund.<br></br>

                  √ The big DiGiPro team is always ready to respond 24 hours a day, seven days a week, and if you can't set up the DiGiPro service on the devices you have for any reason, it won't include refunds. Please see and learn the necessary tutorials on setting up iptv.<br></br>

                  √ If you made a mistake in choosing the service and completed the payment, you can find a ticket in the support section entitled; Create then our support team will review it and accept and do the refund. ; Payment error; This means that you want to buy a 3-month service and have mistakenly chosen and paid for a year or less.<br></br>

                  √ If your account expires 7 days later, the refund request will not be accepted.
                </p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default RefundPolicy