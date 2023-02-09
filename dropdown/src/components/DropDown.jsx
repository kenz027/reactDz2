import { useState } from "react"
import DropDownList from "./DropDownList"

const menus = ['Profile Information', 'Change Password','Become PRO','Help','Log Out']
export default function DropDown(props){
    const [dropDownMenuStatus, setDropDownMenuStatus] = useState(true);
    const toggleOpen = () =>{
        setDropDownMenuStatus((prev)=>!prev)
    }
    return (
        <div data-id="wrapper" className="dropdown-wrapper open">
          <button className="btn" onClick={toggleOpen}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          {dropDownMenuStatus && <DropDownList menus={menus} />}
        </div>
    )
}