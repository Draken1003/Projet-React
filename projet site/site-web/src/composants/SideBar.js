import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar(){
    return(
        // <div class="accordion" id="sideBarCours">
        //     <Select text='Mathématique' id="1" idParent="sideBarCours"/>
        //     <Select text='Français' id="2" idParent="sideBarCours"/>
        // </div>
        <div>
            <Sidebar className="custom-sidebar">
                <Menu menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0) {
                            return {
                                color: disabled ? 'black' : 'white'
                            };
                        }
                            
                    },
                }}>
                    <SubMenu className="custom-submenu" label="Mathématique">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="Physique Chimie">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="SVT">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="NSI">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="SI">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="SES">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    
                    <SubMenu className="custom-submenu" label="Histoire">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="Français">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="Philosophie">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="HGGSP">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>

                    <SubMenu className="custom-submenu" label="HLP">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    
                    <SubMenu className="custom-submenu" label="EMC">
                        <MenuItem component={<Link to="" />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    
                </Menu>
            </Sidebar>
        </div>
        
    )
}

export default SideBar;