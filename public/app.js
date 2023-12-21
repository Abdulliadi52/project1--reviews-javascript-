const reviews = [
  {
    id: 1,
    name: "Abdulliadi Abdulbaki",
    job: "web developer",
    img: "https://my-portfolio-website-seven-psi.vercel.app/assets/images/baki.jpg",
    text: "I am a frontend developer learner who looks forward to have a lot of knowledge about this programme. I hope i can make a clean code and pixel perfect design. I also hope i make the website more and more interactive with web animation",
  },
  {
    id: 2,
    name: "Mutihu Oladipupo Sanusi",
    job: "UI/Ux Designer",
    img: "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/345600873_637421971534890_6449769017177550313_n.jpg?stp=c204.0.1224.1224a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEJ-Z3lFjgUl5gNLERd-gcpjHfUPyCLk76Md9Q_IIuTvku-vWTuKezoV3did_oJHYKoyJKKbCnb5aeFQNzNTson&_nc_ohc=iRHjWYFXPW0AX8mRz93&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AfCyqOKtJNRabhrCFHviLdyNwqf5PP9ABkQwhAD8aV5MWA&oe=658AABCA",
    text: "A web designer is responsible for the visual design, layout, and overall aesthetics of a website. They focus on creating a user-friendly and visually appealing online experience for visitors.",
  },
  {
    id: 3,
    name: "Abdul Fattāh Ọlàdayọ́",
    job: "web designer",
    img: "https://scontent.fabv3-2.fna.fbcdn.net/v/t1.6435-9/105034883_1537132209828413_946010953313277996_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeE-lMdP1WtAh1CoPfjnCOE-9ValZcnICH71VqVlycgIfnJooIa2aqVmoiSPzuXK_ePGRa78i_VBdbf2USayISzr&_nc_ohc=YlvFd86XZ9gAX8ckrMu&_nc_ht=scontent.fabv3-2.fna&oh=00_AfAf6dVmBS56YtIzC5s5wKD_RR7nyBvL8WLD6TpmcD7gRQ&oe=65ABF276",
    text: " A web designer is a professional who specializes in creating the visual aspects of a website. This includes the layout, color scheme, typography, and overall aesthetic appeal of a website. Web designers work closely with clients or stakeholders to understand their goals and requirements, and then use their creative and technical skills to design a website that meets those needs.",
  },
  {
    id: 4,
    name: "Muhyideen Olayemi Sanusi",
    job: "Backend developer",
    img: "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-1/398762833_2653276721487155_4109088802786380264_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeHjtcjma3CLfy7O0XPqcpAysnld1_0vLP2yeV3X_S8s_QMDxay_qJaxDbgsaQPmomGP27KCcVDyAxqIVdhCFaKq&_nc_ohc=BxR4LlMkx1UAX-Pg21J&_nc_ht=scontent.fabv3-1.fna&oh=00_AfDjrH8GJ5K0A6tcHbHWejEV7Rv_2cfaO9kHotc8iQJF0Q&oe=6589AF60",
    text: "A backend developer is a type of software developer who focuses on building and maintaining the server-side of web applications, software, or systems. The backend is the part of an application or system that is responsible for processing data, managing databases, and performing tasks that enable the frontend (user interface) to function",
  },
  {
    id: 5,
    name: "Yakubu Shedrach",
    job: "Electrical Engineer",
    img: "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/359225745_267940435847940_2540127244432079105_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE7o0dBOgkxaN4CwJzvA7DiFdfxEp9AjN0V1_ESn0CM3V27RI_98ynZzIXnO7dnBAHETFn8ZtpvUBUPQ0WSsWXQ&_nc_ohc=39NvviYHuMkAX8WiaHF&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AfCmQ4fIAfgtpqtV3CtxxGKTk5EJIJRMXwivab1Icz3iaQ&oe=6589B2B3",
    text: "An electrical engineer is a professional who designs, develops, tests, and supervises the manufacturing of electrical systems and electronic devices. They work with a wide range of technologies, from power generation and distribution to telecommunications and control systems.",
  },
  {
    id: 6,
    name: "Alisha Mahmood",
    job: "Actress",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6b4EOx7ysCVbhIujYl8R65V3FPa_GChmzUA&usqp=CAU",
    text: "An actress is a female performer who plays a role in a dramatic production, typically in theater, film, television, or radio. Actresses bring characters to life by portraying their emotions, actions, and dialogue. Here are some key aspects of being an actress:",
  },
  {
    id: 7,
    name: "tataina manaois",
    job: "Singer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp7ROCdyqLDEQiSwMT2-NQuxIDn94cINgpQ&usqp=CAU",
    text: "A singer is an individual who uses their voice to produce musical sounds and convey emotions through singing. Singers are artists who may specialize in various genres such as pop, rock, classical, jazz, country, hip-hop, or other styles of music.",
  },
  {
    id: 8,
    name: "Jeff Berzoz",
    job: "web developer",
    img: "http://t3.gstatic.com/images?q=tbn:ANd9GcQyLhUO23xAdRT1G1wDj7P55wu7x0P8IMYDC1lgibK03efPi95-ck5Qu0RLufEel7jc18JFmA",
    text: "jeff Berzoz was the founder and former CEO of Amazon, one of the world's largest and most influential e-commerce and technology companies. Jeff Bezos played a key role in shaping Amazon into a global powerhouse, expanding its services beyond online retail to include cloud computing (Amazon Web Services), streaming services, and more.",
  },
];

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  //   currentItem = Math.floor(Math.random() * reviews.length);
  currentItem = getRandomNumber();
  showPerson();
});

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
