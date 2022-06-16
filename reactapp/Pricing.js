

function Pricing(props) {
  return (
//   <div className='App'>
//   <section className='pricing py-5'/>
//   <div className='container'/>
//     <div className='row'>
      
      <div className='col-lg-4'>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.head}</h5>
            <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.h2}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.h3}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className={props.class1}><span className="fa-li"><i className={props.class2}></i></span>Unlimited
                Private Projects</li>
              <li className={props.class1}><span className="fa-li"><i className={props.class2}></i></span>Dedicated
                Phone Support</li>
              <li className={props.class1}><span className="fa-li"><i className={props.class2}></i></span>{props.data1}Free Subdomain
              </li>
              <li className={props.class3}><span className="fa-li"><i className={props.class4}></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Pricing;
