import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useEffect } from 'react';
import '../style/About.css';



const Termsofservice = ({scroll}) => {

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
          <div className="terms text-black">
            <div className='me-2'>
            <Link to="/" className="text-black"><i class="fas fa-home"></i>  Home</Link> > Terms And Conditions
            </div>
            <div className='container-title'>
                <h2>Terms And Conditions</h2>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>DiGiPro Terms and Conditions</h3>
                  DiGiPro provides an online video streaming service which allows clients to browse
                  distinctive offerings of live and on-demaknd programs. 
                  Consequently, by accessing or using any of the DiGiPro 
                  services, you acknowledge and consent to these terms:
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Changes to the Terms and Conditions</h3>
                  We may, at any time, and at our sole discretion, 
                  adjust these Terms and Conditions of Use, including 
                  our Privacy Policy, with or without notice to the 
                  Client. Any such alteration will be effective instantly 
                  upon open posting. Your proceeded use of our Service and 
                  this Site following any such alteration constitutes your acknowledgment 
                  of these adjusted Terms.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Minimum age requirement</h3>
                  In order to become a member and utilize the DiGiPro services, 
                  you must be 18 years old or older.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Usage and service terms</h3>
                  “You may not either directly or through the use of any device, software, internet site, 
                  web-based service, or other means, re-stream, distribute, broadcast or transmit the content.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Third party purchases</h3>
                  Your transactions and other dealings with third party vendors that are found 
                  on or through the service, including “click to purchase”, 
                  and other comparable programs, are solely between you and such dealer.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Quality of streams</h3>
                  A perfect viewing experience relies upon your network access and device capabilities. 
                  The elements will be based on your location, internet capacity, the quantity of devices 
                  connected to the same network, the content you have chosen, and the configuration of the device you are using.Subsequently, 
                  DiGiPro can’t make any guarantees about the content in these regards. 
                  Please note sharing a subscription will result in permanent suspension or device ban.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Used balance</h3>
                  Please note that all the subscriptions made and credits used are final 
                  and non-refundable under any circumstances.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Unsupported regions</h3>
                  “Our services are unavailable in the following countries: √ Wordwild
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Accuracy of information</h3>
                  All the data you submit to our database must be accurate and updated. Please keep your passwords safe. 
                  You won’t need to uncover it to any DiGiPro agents. 
                  You are responsible for all utilization of your account.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Compatibility</h3>
                  In order to access the services, you must use devices that meet the system and compatibility prerequisites that we establish in our Help center.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Internet service and data usage</h3>
                  You are in charge of any expenses related to your network access used to get to our services.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Sharing a subscription</h3>
                  Sharing a subscription is not permitted. You can only have one active stream open at any given time. However, by purchasing extra connections, you can watch on multiple devices at the same time.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Purchase details</h3>
                  In order to make a purchase, you will need to follow the ordering procedures described via the service. Pricing details for products and the procedures for payment and delivery are displayed via the service, and are subject to change without notice.
                </p>
            </div>

            <div className='container-policy '>
                <p className='text-black'>
                  <h3>Purchase details</h3>
                  In extension of our rights to end or suspend your access delineated above, 
                  you acknowledge that: your access and usage of the services might be suspended for the 
                  length of any sudden or unscheduled downtime or unavailability of any portion or all of 
                  the services for any reason. All correspondences and notice to be made or offered in understanding with this Agreement ought to be in the English language. 
                  We maintain all authority to instantly end or limit your use of the services or access to content at any time, 
                  without notice or liability, if DiGiPro determines in its sole discretion that you have breached these Terms, 
                  disregarded any law, rule, or regulation. The DiGiPro logo, and other DiGiPro marks, graphics, scripts, 
                  are trademarks of DiGiPro. None of the DiGiPro trademarks may be copied, downloaded, or otherwise exploited.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Termsofservice