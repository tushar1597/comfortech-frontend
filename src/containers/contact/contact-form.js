import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import '../styles/contact.css';
import { submitContactFormAPI } from '../../actions/contact.action';

class ContactForm extends Component {
    constructor(){
        super();
        this.state = {
            f_nm: '',
            m_nm: '',
            l_nm: '',
            p_no: '',
            eml: '',
            desc: '',
            nt_f_nm: false,
            nt_l_nm: false,
            nt_p_no: false,
            nt_eml: false, 
        }
    }
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
      
    }
    submitForm = (e) => {
        let isOk = true;
        let name_format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let email_format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let number_format = /^[0-9]*$/;
        e.preventDefault();
        console.log("Called");
        if(!this.state.f_nm){
            console.log(1);
            this.setState({
                nt_f_nm: true,
            })
            isOk = false;
        } else{
            console.log(2);
            if(name_format.test(this.state.f_nm)){
                this.setState({
                    nt_f_nm: true,
                })
                isOk = false;    
            } else{
                this.setState({
                    nt_f_nm: false,
                })
            }
        }

        if(!this.state.l_nm){
            console.log(3);
            this.setState({
                nt_l_nm: true,
            })
            isOk = false;
        } else{
            console.log(4);
            if(name_format.test(this.state.l_nm)){
                this.setState({
                    nt_l_nm: true,
                })
                isOk = false;    
            } else{
                this.setState({
                    nt_l_nm: false,
                })
            }
        }
        if(!this.state.p_no){
            console.log(5);
            this.setState({
                nt_p_no: true,
            })
            isOk = false;
        } else{
            if(this.state.p_no.length == 10){
                this.setState({
                    nt_p_no: false,
                })
            } else{
                this.setState({
                    nt_p_no: true,
                })
                isOk = false;
            }
            console.log(6);
        }

        if(!this.state.eml){
            console.log(7);
            this.setState({
                nt_eml: true,
            })
            isOk = false;
        } else{
            console.log(8,email_format.test(String(this.state.eml).toLowerCase()));
            if(email_format.test(String(this.state.eml).toLowerCase())){
                this.setState({
                    nt_eml: false,
                })
            } else{
                this.setState({
                    nt_eml: true,
                })
                isOk = false;
            }    
        }

        console.log(this.state);
        if(isOk){
            console.log(9);
            this.props.submitContactFormAPI(this.state.f_nm,this.state.m_nm,this.state.l_nm,this.state.eml,this.state.p_no,this.state.desc);
        }else{
            alert("Please fill all Details correctly");
        }
        
    }
    setFirstName = (e) => {
        if(e && e.target){
            this.setState({
                f_nm : e.target.value
            })
        }
    }
    setMiddleName = (e) => {
        if(e && e.target){
            this.setState({
                m_nm : e.target.value
            })
        }
    }
    setLastName = (e) => {
        if(e && e.target){
            this.setState({
                l_nm : e.target.value
            })
        }
    }
    setPhoneNumber = (e) => {
        if(e && e.target){
            let number_format = /^[0-9]*$/;
        if((number_format.test(e.target.value) && e.target.value.length <=10) || !e.target.value){
            if(e && e.target){
                this.setState({
                 p_no : e.target.value
                })
            }
        }
        }
    }
    setDescription = (e) => {
        if(e && e.target){
            this.setState({
                desc : e.target.value
            })
        }
    }
    setEmail = (e) => {
        if(e && e.target){
            this.setState({
                eml : e.target.value
            })
        }
    }

    render() {
        return(
            <div className="ctf-container">
                <p className="fm-heading">contact form</p>
                <form className="ctf-form">
                    <p className="fm-lbl">First Name</p>
                    <input className="fm-inp" value={this.state.f_nm} onChange={this.setFirstName} type="text"/>
                    <p className="fm-lbl">Middle Name</p>
                    <input className="fm-inp"  value={this.state.m_nm} onChange={this.setMiddleName} type="text"/>
                    <p className="fm-lbl">Last Name</p>
                    <input  className="fm-inp"  value={this.state.l_nm} onChange={this.setLastName} type="text"/>
                    <p className="fm-lbl">Email</p>
                    <input  className="fm-inp"  value={this.state.eml} onChange={this.setEmail} type="text"/>
                    <p className="fm-lbl">Phone Number</p>
                    <input  className="fm-inp"  value={this.state.p_no} onChange={this.setPhoneNumber} type="text"/>
                    <p className="fm-lbl">Description</p>
                    <input  className="fm-inp" value={this.state.desc} onChange={this.setDescription}  type="text"/>
                    <div className="fm-sec">
                    <button className="fm-btn" onClick={this.submitForm}>Submit</button>
                    <Link className="fm-link" to="/all-contacts">View Contacts</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {

    })

const mapDispatchToProps = {
    submitContactFormAPI,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactForm));
