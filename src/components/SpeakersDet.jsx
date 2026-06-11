import React, { Component } from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';

export class SpeakersDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        international: [],
        national: [],
        internationalOpt: false,
        nationalOpt: true,
        internationalDet: "",
        internationalImage: "",
        nationalDet: "",
        nationalImage: "",
    }
  }
  async componentDidMount() {
    const url = "google sheet link"
    const response1 = await axios.get(url+"international");
    this.setState({international: response1.data.data});
    const response2 = await axios.get(url+"national");
    this.setState({national: response2.data.data});
  }
  showInternational(i){
    if (i.details === ""){
      this.setState({internationalOpt: false});
      return;
    }
    this.setState({internationalOpt: true, internationalDet: i.details, internationalImage: i.image});
  }
  render() {
    return (
      <div  className="m-5" style={{backgroundImage: "url('https://static.wixstatic.com/media/485cee_1fdf8218c0804eb6a86d963fe13643a6~mv2.jpg/v1/fill/w_480,h_543,al_c,q_80,enc_auto/485cee_1fdf8218c0804eb6a86d963fe13643a6~mv2.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="d-flex flex-column flex-lg-row">
        <div className="d-flex text-left flex-column m-4 p-3">
            <h3 className="text-danger">Confirmed Plenary and Invited Speakers (International)</h3>
            {this.state.international.map((i, index)=> {
                // return <p className="m-0 text-dark fw-bold" index={index} style={{cursor: 'pointer'}} onClick={()=> this.showInternational(i)}>{i.name}</p>
            return <Popup trigger={<p className="m-0 text-dark fw-bold" style={{cursor: 'pointer'}}>{i.name}</p> } position='right center' disabled={i.details === ""}>
            <div className="m-5 d-flex flex-row bg-light">
              {i.image !== "" && <img src={i.image} alt="image" />}
              <p>{i.details}</p>
            </div>
          </Popup>
            })}
        </div>
        </div>
        
        <div className="d-flex text-left flex-column m-4 p-3">
            <h3 className='text-danger'>Confirmed Plenary and Invited Speakers (National)</h3>
            {this.state.national.map((i, index)=> {
                // return <p className="m-0 text-dark fw-bold" index={index} style={{cursor: 'pointer'}}>{i.name}</p>
                return <Popup trigger={<p className="m-0 text-dark fw-bold">{i.name}</p> } position='right center' disabled={i.details === ""}>
                  <div className="m-5 d-flex flex-column flex">
                    <p>{i.details}</p>
                    {i.image !== "" && <img src={i.image} alt="image" />}
                  </div>
                </Popup>
            })}
            {/* <img src="/tba.png" height={330} width={330}/> */}
        </div>
      </div>
    )
  }
}

export default SpeakersDet
