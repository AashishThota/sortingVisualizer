import React,{Component} from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, 
  } from 'reactstrap';
 
  import './Navcomponent.css'
  import SliderOption from './SliderOption'

class Navcomponent extends Component{
    
  render(){
    return(
        <div>
          
        <Navbar  expand="md" className="navigation">
        
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text" href="#">Array Size</NavLink>
            </NavItem>
            
            <NavItem className="slider">
              <SliderOption />
            </NavItem> 
            <div className="separator"></div>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text">
                Sorting Method
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Merge-Sort
                </DropdownItem>
                <DropdownItem>
                  Heap-Sort
                </DropdownItem>
                
                <DropdownItem>
                  Bubble-sort
                </DropdownItem>
                <DropdownItem>
                  Quick-Sort
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="separator"></div>
            <NavItem>
            <NavLink href="#" className="text">Sort</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="webpagename">Sorting Visualizer</NavbarText>
      </Navbar>
        </div>
    )
    }
}

export default Navcomponent