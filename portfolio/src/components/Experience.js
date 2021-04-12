import React, { Component } from 'react'
import './Experience.css'
export class Experience extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Website for a company with',
             show:'May 2021 - April',
             link:'@Excavators',
              href:"https://itbbud.pl",
             li:'Designed the complete website of earthworks company',
             li2:'Worked on adding animations to the website.',
             li3:'Develop js functionality'
            
        }
    }
    
    clickHandler(){
        this.setState({
            message:'Website for a company with',
             show:'May 2021 - April',
             link:'@Excavators',
             href:"https://itbbud.pl",
             li:'Designed the complete website of earthworks company',
             li2:'Worked on adding animations to the website.',
             li3:'Develop js functionality'
           
        })
    }

    clickHandler2(){
        this.setState({
            message:'Pizza website from',
            show:'September 2020 - Octomber 2020',
            link:'@MasterGatsby',
              href:"https://gatsby.pizza/",
             li:'Build & style websites with Gatsby, React.js',
             li2:'Used graphQl,Gatsby',
             li3:'Learned serverless functions'
        })

    }

    clickHandler3(){
        this.setState({
          message:'Web programed for',
            show:'Februar 2020 - March 2020',
            link:'@Construction company',
    href:"https://neqts.github.io/itbbudWeb",
            li:'Page programed using HTML, CSS and JS',
             li2:'Graphic project',
             li3:'Basic Seo'
        })

    }
    clickHandler4(){
        this.setState({
            message:'Technology website for',
            show:'November 2019 - December 2019 ',
            link:' @Technology picnic',
                href:"https://neqts.github.io/KonkursZSEM/",
            li:'Create website design',
             li2:'Develop js functionality',
             li3:'Project the competition form'
        })

    }
    clickHandler5(){
        this.setState({
            message:'Site developed for school',
            show:'November 2017 - February 2018 ',
                href:"https://neqts.github.io/schoolWeb/",
            link:' @School',
            li:'Learned to build Resposive website',
             li2:'I used HTML CSS JS to build the website',
             li3:'Pohoshop Web design'
        })

    }

    render() {
        
        return (
            <div className="work" id="Experience"> 
           
            <div>
            <h3 className="experienceh"><a>02.&nbsp;</a>My Experience <span></span></h3>
            </div>
            <div className="stack">
                <ul>
                    <li className="li-item "><button onClick={this.clickHandler.bind(this)}>Excavator</button></li>
                    <li className="li-item"><button onClick={this.clickHandler2.bind(this)}>Gatsby</button></li>
                    <li className="li-item"><button onClick={this.clickHandler3.bind(this)}>Construction</button></li>
                    <li className="li-item"><button onClick={this.clickHandler4.bind(this)}>Technology</button></li>
                    <li className="li-item"><button onClick={this.clickHandler5.bind(this)}>School</button></li>

                 
                    <span className="nav-indicator"></span>
                
                </ul>
                <div>
                    <div>
                   <p className="message"> {this.state.message} </p> &nbsp; &nbsp; <a href={this.state.href}>{this.state.link}</a> <br/>
                   </div>
                <p className="date"> {this.state.show} </p>
                <ul>
                    <li>{this.state.li}</li>  <br/>
                    <li>{this.state.li2}</li> <br/>
                      <li>{this.state.li3}</li> <br/>
                </ul>
                
                </div>
            </div>
      
        </div>
        
        )
    }
}

export default Experience