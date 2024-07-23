import { useEffect, useState } from 'react';
import './Inscription.css'
import google from '../ressources/google.png'
import github from '../ressources/github.png'
import { Link } from 'react-router-dom';
import GoBackButton from '../composants/common/GoBackButton';


function Inscription(){

    return(
        <div class= "w-100 h-100 d-flex align-items-center justify-content-center">
            <div class=" col-xl-4 col-lg-5 col-md-6 col-sm-7 col-12 p-5" style={{ backgroundColor:"rgba(43, 43, 43,0.6)", borderRadius:20}}> 
                <div class="px-lg-4">
                    <h2 style={{color: "white"}}>Your Logo</h2>
                    <h3 class= "my-4" style={{color: "white"}}>Sign in</h3>

                    <h5 class = "mb-2" style={{color: "white"}}>Pseudo</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Pseudo" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                    <h5 class = "mb-2" style={{color: "white"}}>Email</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username@gmail.com" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                    <h5 class = "mb-2" style={{color: "white"}}>Password</h5>
                    <div class="form-group mb-1">
                        <div class="col-sm-12">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>

                    <div class="form-group my-4 text-center">
                        <div class="col-sm-12">
                            <button type="submit" class="btn w-100" style={{fontWeight:"bold", backgroundColor: "rgb(0, 255, 153)", color: "#181C20"}}>Sign in</button>
                        </div>
                        <div class="mt-3">
                            <h10 style={{color: "white", fontSize:14}}>or continue with</h10>
                        </div>
                    </div>

                    
                    <div class="row gx-3">
                        <div class="col">
                            <button class="w-100 btn btn-default" style={{backgroundColor:"white", borderRadius:6}}>
                                <img src={google} width="20"/>
                            </button>  
                        </div>
                         
                        <div class="col">
                            <button class="w-100 btn btn-default" style={{backgroundColor:"white", borderRadius:6}}>
                                <img src={github} width="20"/>
                            </button>  
                        </div> 

                    </div>

                    <div class="form-group mt-4 text-center">
                        <div class="mt-3">
                            <h10 style={{color: "white", fontSize:14}}>Have an account : </h10>
                            <Link to='/connexion' style={{fontSize: 13 ,color: "white", textDecoration:"none", fontWeight:"bold" }}>Login </Link>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Inscription;