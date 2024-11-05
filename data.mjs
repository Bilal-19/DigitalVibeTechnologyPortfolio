const serviceData = [
  {
    id: 1,
    imgAddress: "./media/Thumbnail_Images/frontend.jpg",
    titleText: "Frontend Web Development",
    titleDescription: "HTML, CSS, Bootstrap 5, JavaScript, jQuery and React JS",
  },
  {
    id: 2,
    imgAddress: "./media/Thumbnail_Images/backend.jpg",
    titleText: "Backend Web Development",
    titleDescription: "PHP, Laravel and MySQL",
  },
  {
    id: 3,
    imgAddress: "./media/Thumbnail_Images/fullstack.jpg",
    titleText: "Full Stack Software Development",
    titleDescription: "React JS and Laravel",
  },
];

const skillIconImages = [
  "html-5.png",
  "css.png",
  "bootstrap.png",
  "sass.png",
  "js.png",
  "react_js.png",
  "php.png",
  "laravel.png",
  "c-sharp.png",
  "python.png",
  "mysql.png",
];

const portfolioImages = [
  {
    imageSrc: "Project_Images/realestate.png",
    displayText: "Real Estate Web Application",
  },
  {
    imageSrc: "Project_Images/landing_page.png",
    displayText: "Product Landing Page",
  },
  {
    imageSrc: "Project_Images/dashboard.png",
    displayText: "Visa Applicant ~ CRM Software",
  }
];

const pricePackage = [
  {
    id: 1,
    packageName: "Basic Package",
    packagePrice: "$100",
    packageFeatures: [
      "Functional Website (Home, About, Service)",
      "Landing Page",
      "4 pages",
      "Speed Optimization",
      "Social Media Icons",
      "3 Revisions",
      "Delivery in 7 days",
    ],
  },

  {
    id: 2,
    packageName: "Standard Package",
    packagePrice: "$150",
    packageFeatures: [
      "Functional Website (Home, About, Service)",
      "Landing Page",
      "8 pages",
      "Speed Optimization",
      "Social Media Icons",
      "5 Revisions",
      "Delivery in 2 Weeks",
    ],
  },

  {
    id: 3,
    packageName: "Premium Package",
    packagePrice: "$200",
    packageFeatures: [
      "Functional Website (Home, About, Service)",
      "Landing Page",
      "8-12 pages",
      "Speed Optimization",
      "Social Media Icons",
      "10 Revisions",
      "Delivery in 1 Month",
    ],
  },
];

const frequentlyAskedQA = [
  {
    id: 1,
    collapseID: "one",
    questionText: "What services does your company provide?",
    answerText:
      "We specialize in software development services including frontend development, backend development, and full-stack development. We cover a wide range of technologies and frameworks to deliver customized solutions tailored to your business needs.",
  },
  {
    id: 2,
    collapseID: "two",
    questionText:
      "Which technologies do you use for frontend and backend development?",
    answerText:
      "For frontend development, we use technologies like React and HTML/CSS/JavaScript. For backend development, we work with Python (Django), PHP (Laravel), and databases like MySQL.",
  },
  {
    id: 3,
    collapseID: "three",
    questionText:
      "Can you build custom software solutions tailored to our specific requirements?",
    answerText:
      "Yes, we specialize in creating custom software solutions that are specifically designed to meet the unique requirements of your business. Whether it's a web app or enterprise solution, we ensure that the solution aligns with your business goals.",
  },
  {
    id: 4,
    collapseID: "four",
    questionText:
      "Do you offer ongoing support and maintenance after development?",
    answerText:
      "Yes, we offer comprehensive post-development support and maintenance services to ensure your software runs smoothly, remains secure, and adapts to any evolving needs or new features.",
  },
];

export {
  serviceData,
  skillIconImages,
  portfolioImages,
  pricePackage,
  frequentlyAskedQA,
};
