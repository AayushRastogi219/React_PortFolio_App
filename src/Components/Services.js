import React, {Component} from 'react';
import '../Services.css';
// import phone from '../image/if_BT_iphone_905558.png';

class Services extends Component{
  render(){
    return(
      <section>
        <div className='services container-fluid'>
          <div>
            <h3>{this.props.name}</h3>
            <h2>{this.props.secHeader}</h2>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <span className='roundedCircle'><img src={require('../image/if_BT_iphone_905558.png')} className= 'img-responsive' alt="phone"></img></span>
              {/* <span><img src={phone} alt="phone"></img></span> */}
              <h4><strong>Responsive</strong></h4>
              <p>Looks great on any screen size!</p>
            </div>
            <div className='col-lg-3 col-md-6'>
              <span className='roundedCircle'><img src={require('../image/if_01_Pencil_2064476.png')} className= 'img-responsive' alt="Pencil"></img></span>
              <h4><strong>Redesigned</strong></h4>
              <p>Freshly redesigned for Bootstrap 4.</p>
            </div>
            <div className='col-lg-3 col-md-6'>
              <span className='roundedCircle'><img src={require('../image/if_Thumb-up_85401.png')} className= 'img-responsive' alt="thumbsUP"></img></span>
              <h4><strong>Favorited</strong></h4>
              <p>Millions of users Start Bootstrap!</p>
            </div>
            <div className='col-lg-3 col-md-6'>
              <span className='roundedCircle'><img src={require('../image/if_mail_1814108.png')} className= 'img-responsive' alt="mail"></img></span>
              <h4><strong>Question</strong></h4>
              <p>I mustache you a question...</p>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Services;
