import React,{Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

//This component will be a dropdown of the available registers
//The register that the user selects will be the one that the user will be doing transactions with

export default class CurrentVendor extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prev => ({
            dropdownOpen: !prev.dropdownOpen
        }));
    };

    render(){

        let vendor_Item = (this.props.available_registers).map((item) =>
            <DropdownItem value={item}  onClick={(event) => this.props.updateRegister(event.target.value)}>{item}</DropdownItem>
        );

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Venues that Accept CRCCC
                </DropdownToggle>
                <DropdownMenu>
                    {vendor_Item}
                </DropdownMenu>
            </Dropdown>
        );
    }

}

