// "use client"

// import React, { useEffect } from 'react'

// const AboutHero = () => {

//     const handleClick = () => {
//         // Your existing JavaScript code
//         let next = document.querySelector('.next');
//         let prev = document.querySelector('.prev');
    
//         next.addEventListener('click', function () {
//           let items = document.querySelectorAll('.aboutItem');
//           document.querySelector('.aboutSlide').appendChild(items[0]);
//         });
    
//         prev.addEventListener('click', function () {
//           let items = document.querySelectorAll('.aboutItem');
//           document.querySelector('.aboutSlide').prepend(items[items.length - 1]);
//         });
//       }
    

//   return (
//     <div className="aboutContainer">

//         <div className="aboutSlide">

            
//             <div className="aboutItem" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
//                 <div className="aboutContent">
//                     <div className="name">Switzerland</div>
//                     <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                     <button>See More</button>
//                 </div>
//             </div>
//             <div className="aboutItem" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
//                 <div className="aboutContent">
//                     <div className="name">Finland</div>
//                     <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                     <button>See More</button>
//                 </div>
//             </div>
//             <div className="aboutItem" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
//                 <div className="aboutContent">
//                     <div className="name">Iceland</div>
//                     <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                     <button>See More</button>
//                 </div>
//             </div>
//             <div className="aboutItem" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
//                 <div className="aboutContent">
//                     <div className="name">Australia</div>
//                     <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                     <button>See More</button>
//                 </div>
//             </div>
//             <div className="aboutItem" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
//                 <div className="aboutContent">
//                     <div className="name">Netherland</div>
//                     <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                     <button>See More</button>
//                 </div>
//             </div>
//             <div className="aboutItem" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
//                 <div className="aboutContent">
//                     <div className="name">Ireland</div>
//                     <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                     <button>See More</button>
//                 </div>
//             </div>

//         </div>

//         <div className="aboutbutton">
//             <button onClick={handleClick} className="prev"><i className="fa-solid fa-arrow-left"></i></button>
//             <button onClick={handleClick} className="next"><i className="fa-solid fa-arrow-right"></i></button>
//         </div>

//     </div>
//   )
// }

// export default AboutHero