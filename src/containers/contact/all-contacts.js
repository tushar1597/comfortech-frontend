import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import '../styles/contact.css';
import { getAllContactsAPI, deleteContactAPI } from '../../actions/contact.action';
import YesNoModal from "../../components/modal/yes-no-modal";

class AllContacts extends Component {
    constructor(){
        super();
        this.state = {
            op_del_mdl: false,
            ct_rcd: null,
        }
    }
    componentDidUpdate(prev_props){
        console.log(this.props.all_cts);        
    }
    componentDidMount() {
        this.props.getAllContactsAPI();
    }
    delete = () =>{
        this.props.deleteContactAPI(this.state.ct_rcd);
        this.closeModal();
    }
    closeModal = () =>{
        this.setState({
            op_del_mdl: false
        })
    }
    openModal = (_id) =>{
        console.log(_id);
        this.setState({
            op_del_mdl: true,
            ct_rcd: _id,
        })
    }
    

    render() {
        return(
            <div className="all-ct-container">
                <table>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.all_cts && this.props.all_cts.length ? this.props.all_cts.map(({ _id,f_nm,m_nm,l_nm,p_no,eml }, index) => {
                            let vr_num = index + 1;
                            return (
                                <tr key={"contact_"+index}>
                                    <td>{index+1}</td>
                            <td>{f_nm}</td>
                            <td>{m_nm}</td>
                            <td>{l_nm}</td>
                            <td>{p_no}</td>
                            <td>{eml}</td>
                            <button onClick={() => this.openModal(_id)}>Delete</button>
                                </tr>
                            )}) : null
                        
                    }      
                    </tbody>              
                </table>
                <YesNoModal 
                handleState={this.state.op_del_mdl}
                yesFunction={this.delete}
                noFunction={this.closeModal}
                heading={"Do you want to delete this contact?"}
                text={"Deleting the contact would permanently delete it from our database."}
                classes={{ Button: "rm-btn" }} />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        all_cts : state.contact.all_cts,
    })

const mapDispatchToProps = {
    getAllContactsAPI,
    deleteContactAPI,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(AllContacts));
