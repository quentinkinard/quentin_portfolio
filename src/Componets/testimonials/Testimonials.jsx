import React from "react";
import "./Testimonials.css";
import doesnotexist from "../assets/doesnotexist.jpg";
import doesnotexist2 from "../assets/doesnotexist.jpg";
import doesnotexist3 from "../assets/doesnotexist.jpg";
import doesnotexist4 from "../assets/doesnotexist.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: doesnotexist,
    name: "John Smith",
    review:
      "Voluptate cillum adipisicing voluptate exercitation voluptate id id cillum labore mollit labore et. Lorem adipisicing occaecat ipsum minim adipisicing duis laboris est aliqua consequat mollit ipsum deserunt et. Id officia nisi dolor sint consequat Lorem culpa deserunt velit veniam aliqua dolore culpa. Laborum fugiat esse aliqua amet velit mollit excepteur fugiat incididunt qui laboris. Do aliquip cillum est in.",
  },
  {
    avatar: doesnotexist2,
    name: "Jane Doe",
    review:
      "Do incididunt aliqua officia et dolor quis consequat qui dolore incididunt sit elit. Nostrud id duis nulla amet enim nostrud do. Proident occaecat ad excepteur id sint eiusmod qui ex enim elit. Id consequat laborum enim ut labore elit nisi occaecat dolore voluptate ipsum aute excepteur et. Quis ullamco sint dolore sunt dolor culpa anim laboris anim. Eiusmod mollit minim eu nisi sint laborum ea exercitation ex amet esse reprehenderit et.",
  },
  {
    avatar: doesnotexist3,
    name: "Peter Cotton",
    review:
      "Dolor sunt excepteur mollit enim nostrud est culpa eiusmod sunt est. Ad irure sint tempor enim. Consequat tempor est incididunt enim sunt. Aute ut nostrud laboris culpa nostrud commodo ea. Anim ullamco occaecat amet commodo aute aliqua et sunt enim dolor proident tempor.",
  },
  {
    avatar: doesnotexist4,
    name: "Jessica Jones",
    review:
      "Dolor sunt excepteur mollit enim nostrud est culpa eiusmod sunt est. Ad irure sint tempor enim. Consequat tempor est incididunt enim sunt. Aute ut nostrud laboris culpa nostrud commodo ea. Anim ullamco occaecat amet commodo aute aliqua et sunt enim dolor proident tempor.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="clients_name">{name}</h5>
              <small className="clients_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
