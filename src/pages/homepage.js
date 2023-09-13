import React from "react";
import './homepage.css';
import image from "../images/auditorium.jpg"
import Profilecard from "../components/cards/Profilecard"
import Companyprofile from "../components/symbol/companyprofile";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
function Homepage() {
    return(
        <>
        <Header/>
        <div className="Main">
        <div className="Homi">
            <div className="part1">
                <div className="part1words">
                <h5>---- COMMITTED TO SUCCESS </h5>
                <h1>Digital Conference <br/>For Designers</h1>
                <button>Download</button>
                </div>
            </div>
            <div className="part2">

            </div>
        </div>
        <div className="content">
            <div className="part3">
                <div className="part3words">
                    <h1> The Biggest Digital <br/>Conference .</h1>
                    <p>
                        There arge many variations ohf passages of sorem gpsum ilable , but the <br/>
                        majority have suffered alteration in some form by ected humour , or <br/>
                        randomised words whi.rere arge many variations ohf passages of sorem <br/>
                        gpsum ilable.
                    </p>
                    <br/>
                    <p>
                        There arge many variations ohf passages of sorem gpsum ilable, but the<br/>
                        majority have suffered alteration in.
                    </p>
                    <div className="ghost">
                        <div> 
                              <h3>Where</h3>
                              <p>United states , USA </p>
                         </div> 
                         <div> 
                              <h3>When</h3>
                              <p>23 2022 </p>
                         </div> 
                    </div>
                    <div>
                        <button>GET YOUR TICKET </button>
                    </div>
                </div>
            </div>
            <div className="part4">
                <img src="https://preview.colorlib.com/theme/eventz/assets/img/gallery/about2.png"/>
            </div>
        </div>
        <div className="photoframe1">
            <div className="photo1">
                <h1>The Most Important<br/>Speakers</h1>
                <p>There arge many variation ohf passages of sorem gpsum ilable , but the <br/>
                majority have suffered alteration in.</p>
                <button> View spackert </button>
            </div>
            <div className="photo2">
            <Profilecard 
             img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/team1.png"
             name="JESSCIA BROWN"
             des="Co Founder" />
            <Profilecard
             img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/team2.png"
             name="JESSCIA BROWN"
             des="Co Founder"
            />
            </div>
           
         </div>
         <div className="photoframe2">
            <Profilecard
             img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/team3.png"
             name="BROWN RULSAN"
             des="Co Founder"
            />
            <Profilecard
            img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/team4.png"
            name="JESSCIA BROWN"
            des="Co Founder"
            />
            <Profilecard
            img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/team5.png"
            name="JESSCIA BROWNfffffffffff"
            des="Co Founder"
            />
            <Profilecard
            img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/team6.png"
            name="WNDFERT DROIT"
            des="Co Founder"
            />
         </div>
         <div className="event">
         <div><h1> Event Schedule </h1>  </div>
            <div>
            <span>There arge many variations of passages of sorem gp liable but <br/>
             the majority have sorem gpm iluffe </span>
             </div>
             <div >
                <button >Day - 01 </button>
                <button>Day - 02 </button>
                <button>Day - 03 </button>
                <button>Day - 04 </button>
             </div>
         </div>
         <div className="time">
            <h5>8:30 AM - 9:30 AM </h5>
            <span>Snackers</span>
            <hr/>
            <p>There arge many variation ohf passages of sorem gpsum ilable , 
                  but the majority have suffered alteration in <br/> some form , by 
                  ected humour , or randomised words Whi.rere arge many variations
                  ohf passages of sorem <br/> gpsum ilable
            </p>
            <h5>8:30 AM - 9:30AM </h5>
            <span>opening conference</span>
            <hr/>
            <h5>8:30 AM - 9:30AM </h5>
            <span>Conference Ending </span>
         </div>
         
         <div className="speech">

              <div className="spe1">
                <img src="https://media.istockphoto.com/id/1286013189/photo/businesswoman-standing-at-podium.jpg?s=612x612&w=0&k=20&c=ikXARprv1nIItqibHK1lbzaVsmXKNGr9-kR7nNu_90A="height={"100%"} />
              </div>
              <div className="spe2">
                <img src="https://media.istock/photo.com/id/1213738982/photo/male-college-professor-gestures-during-lecture.jpg?s=612x612&w=0&k=20&c=vPvCqzyq3VUzjCaU-PoMaxC1ncK386Q78Cdp7bUj2Mw=" height={"100%"} />
              </div>
              
         </div>
         <div className="speech2">
             <div className="spe3">
                <img src="" />
             </div>
              <div className="spe4">
                <img src=""  />
              </div>
              <div className="spe5">
                <img src="" />
              </div>
         </div>
         <br/>
         <br/>
         <div className="comp">
            <div className="comp1">
                   <h1>Our Top General <br/> Sponsers</h1>
                   <span> There arge many variations ohf passages of some <br/>
                    gp ilable , but the majority have ssorem gp illuffe</span>
            </div>
            <div className="comp2">
                   <Companyprofile
                    img ="https://preview.colorlib.com/theme/eventz/assets/img/gallery/cisco_brand.png"
                    
                   />

                   <Companyprofile
                     img = "https://preview.colorlib.com/theme/eventz/assets/img/gallery/cisco_brand2.png"
                   />

                    <Companyprofile
                     img = "https://preview.colorlib.com/theme/eventz/assets/img/gallery/cisco_brand3.png"
                   />

                   <Companyprofile
                    img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/cisco_brand4.png"
                   />

                   <Companyprofile
                       img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/cisco_brand5.png"
                   />

                   <Companyprofile
                       img="https://preview.colorlib.com/theme/eventz/assets/img/gallery/cisco_brand6.png"
                   />

            </div>

         </div>
         <div>
            <Footer/>
         </div>
        </div>
        </>
    ) 
}

export default Homepage;