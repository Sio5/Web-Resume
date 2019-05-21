import React, {Component} from 'react'
import { Container, Col, NavLink } from 'reactstrap'
import './style/main.sass'
import Elements from './components/Elements'
import Skills from './components/Skills'
import {animated, Spring } from 'react-spring/renderprops'

export default class App extends Component {
    state = { toggle: true }
    toggle = () => { this.setState(state=>({ toggle: !state.toggle }))}
    render() {
      const toggle = this.state.toggle
        return (
            <Container>
            <Spring
                from={{
                marginTop: toggle ? '0%' : '-10%',
                }}
                to={{
                marginTop: toggle ? '0%' : '-10%',
                }}
                >{props =>
            <div className="fullcontent" style={props}>
            <Elements native>
            {props => (
            <animated.div
              style={{ position: 'fixed', width:60,height:60, left:'25%', marginTop:'5%', ...props }}
            />
          )}
            </Elements>
            <Elements native>
            {props => (
            <animated.div
              style={{ position: 'fixed', width:30,height:30, left:'45%', ...props }}
            />
          )}
            </Elements>
            <Elements native>
            {props => (
            <animated.div
              style={{ position: 'fixed', width:15,height:15, right:'35%', marginTop: '20%', ...props }}
            />
          )}
            </Elements>
                <div id="backgroundtext">
                    <p id="bgtext">FRONT END</p>
                </div>
                <Col xl="1"><p id="jobtext">Junior Front End Developer<br/>from Germany</p></Col>
                <Col xl="5">
                <div id="fronttext">
                </div>
                </Col>
                <Col xl="5">
                <div id="fronttext">
                    <p id="fttext">Hello<span>.</span></p>
                    <p id="fttext">I am</p>
                    <p id="fttext">Ruslan</p>
                </div>
                </Col>
                <Col xl="1">
                <div className="media">
                <NavLink href="https://github.com/Sio5" id="medial">Github</NavLink>
                <NavLink href="https://www.instagram.com/4views.de/" id="medial">Instagram</NavLink>
                <NavLink href="mailto:4views.de@gmail.com" id="medial">Mail</NavLink>
                </div>
                </Col>
            </div>}
            </Spring>
                <div className="skills">
                <Col><p onClick={this.toggle}>Front-End</p></Col>
                <Col><p onClick={this.toggle}>Sorce Controll</p></Col> 
                <Col><p onClick={this.toggle}>Seo</p></Col> 
                <Col><p onClick={this.toggle}>FrameWorks</p></Col> 
                <Col><p onClick={this.toggle}>UI/UX</p></Col> 
                </div>
                <div id="skills" onClick={this.toggle}>
                <Skills>
                <Col>JavaScript ES6<br/>CSS / SASS<br/>HTML</Col>
                <Col>Github<br/>Git(Git Flow)</Col>
                <Col>Keyword Research<br/>OnPage<br/>Content writing</Col>
                <Col>ReactJS<br/>React Native<br/>Bootstrap</Col>
                <Col>Prototyping<br/>Adobe PSD<br/>Figma</Col>
                </Skills>
                </div>
            </Container>
        )
    }
}
