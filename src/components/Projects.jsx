import "../styles/projects.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "../styles/projects.css";  

function Projects() {
  return (
    <div className="projects-container">
      <h5 className="projects-heading">Projects</h5>
      <Swiper
        spaceBetween={30} 
        autoplay
        pagination={{
          clickable: true,
          
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // When window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Default
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <a href="https://fuel-expense-tracker-weather-widget.vercel.app/" target="_blank">
          <div className="project-card">
            <h1 className="project-title">Fuel Expense Calculator</h1>
            <p className="project-subtitle">
              A simple tracking app made using React js{" "}
            </p>
            <img
              className="card-img"
              src="/img/fuelexpense.jpeg"
              alt="fuel expense"
            />
          </div>
          </a> 
        </SwiperSlide>
       
        <SwiperSlide>
          <a href="https://66bf8e40ac8fdb7977807a96--expense-tracker-vuejs01.netlify.app/" target="_blank">
          <div className="project-card">
            <h1 className="project-title">Expense Tracker</h1>
            <p className="project-subtitle">
              A simple tracking app made using Vue js{" "}
            </p>
            <img
              className="card-img"
              src="/img/expense-tracker.jpeg"
              alt="fuel expense"
            />
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a  href="https://www.instagram.com/_ghosh__/" target="_blank">
          <div className="project-card">
            <h1 className="project-title">Meta Filters-Insta,Facebook</h1>
            <p className="project-subtitle">Instagram and Facebook filters still live </p>
            <img
              className="card-img"
              src="/img/filterimg.png"
              alt="filterimg"
            />
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
            <h1 className="project-title">eCommerce React</h1>
            <p className="project-subtitle">eCommerce using React js</p>
            <img
              className="card-img"
              src="/img/16544.jpg"
              alt="fuel expense"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://netflix-react-nu.vercel.app/" target="_blank">
          <div className="project-card">
            <h1 className="project-title">Netflix Home Clone</h1>
            <p className="project-subtitle">Netflix clone made using React js</p>
            <img
              className="card-img"
              src="/img/netflix.jpeg"
              alt="netflix"
            />
          </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;

// function Projetcs() {
//   return (
//     <div className="projects-container">
//       <h5 className="projects-heading">Projects</h5>
//       <div className="cards">
//         <div className="project-card">
//           <h1 className="project-title">Fuel Expense Calculator</h1>
//           <p className="project-subtitle">
//             A simple tracking app made using React js{" "}
//           </p>
//           <img
//             className="card-img"
//             src="/img/fuelexpense.jpeg"
//             alt="fuel expense"
//           />
//         </div>
//         <div className="project-card">
//           <h1 className="project-title">Expense Tracker</h1>
//           <p className="project-subtitle">
//             A simple tracking app made using Vue js{" "}
//           </p>
//           <img
//             className="card-img"
//             src="/img/expense-tracker.jpeg"
//             alt="fuel expense"
//           />
//         </div>
//         <div className="project-card">
//         <h1 className="project-title">eCommerce React</h1>
//         <p className="project-subtitle">
//           eCommerce using React js
//         </p>
//         <img
//           className="card-img"
//           src="/img/16544.jpg"
//           alt="fuel expense"
//         />
//       </div>
//       </div>
      
//     </div>
//   );
// }
// 


