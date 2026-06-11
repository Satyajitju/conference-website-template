import React, { Component } from 'react'
import axios from 'axios';

export class SpeakersDet1 extends Component {
  constructor(props){
    super(props);
    this.state = {
        international: [],
        national: [],
    }
  }
  async componentDidMount(){
    const url = "google-sheet link"
    const response1 = await axios.get(url+"international");
    this.setState({international: response1.data.data});
    const response2 = await axios.get(url+"national");
    this.setState({national: response2.data.data});
  }
  convertImage = (url) => {
    url = url.replace("https://drive.google.com/file/d/", "");
    url = url.replace("/view?usp=sharing", "")
    const new_url = "https://drive.google.com/uc?id="+url;
    return new_url;
  }
  render() {
    return (
      <div className='m-4 d-flex flex-column flex-lg-row flex-md-row text-center'>
        <div className='px-lg-5 col-lg-6 mt-3'>
            <h3>Confirmed Plenary and Invited Speakers (International)</h3>
            {this.state.international.length === 0 &&
              <div class="spinner-grow mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            }
            <div class="accordion accordion-flush" id="accordionFlushExample">
                {this.state.international.map((i, index)=> (
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseint${index}`} aria-expanded="false" aria-controls={`flush-collapseint${index}`}>
                        {i.name}
                    </button>
                    </h2>
                    {i.details !== "" &&
                    <div id={`flush-collapseint${index}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{textAlign: 'justify'}}>
                        <p className="p-2">{i.details}</p>
                        {i.image !== "" && <img className="p-2" src={this.convertImage(i.image)} alt="image" style={{height: 150, width: 150, borderRadius: '50%'}} />}    
                    </div>
                    </div>}
                </div>))}
            </div>
        </div>
        <div className="px-lg-5 col-lg-6 mt-3 border-lg-start border-md-start border-danger border-5">
            <h3>Confirmed Plenary and Invited Speakers (National)</h3>
            {this.state.national.length === 0 &&
                <div class="spinner-grow mt-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            <div class="accordion accordion-flush" id="accordionFlushExample">
                {this.state.national.map((i, index)=> (
                <div class="accordion-item" key={index}>
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                        {i.name}
                    </button>
                    </h2>
                    {i.details !== "" &&
                    <div id={`flush-collapse${index}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{textAlign: 'justify'}}>
                        <p className="p-2">{i.details}</p>
                        {i.image !== "" && <img className="p-2" src={this.convertImage(i.image)} alt="image" style={{height: 150, width: 150, borderRadius: '50%'}} />}    
                    </div>
                    </div>}
                </div>))}
            </div>
        </div>
      </div>
    )
  }
}

export default SpeakersDet1
