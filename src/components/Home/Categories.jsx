import RedTitle from "../common/components/RedTitle";
import PropTypes from "prop-types";
import Arrows from "../common/components/Arrows";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Category = ({ icon, name }) => (
  <Link to="category">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" w-full hover:animate-pulse flex gap-4 items-center justify-center flex-col bg-white  py-8 rounded-lg border border-gray-300 transition duration-300 hover:bg-cyan-400 hover:invert  hover:shadow-xl hover:-translate-y-2 "
    >
      <div>{icon}</div>
      <div className="text-lg">{name}</div>
    </button>
  </Link>
);

const CategoryList = () => {
  const categories = [
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            {/* Jacket Outline */}
            <path
              d="M14 47V18C14 14 17 10 21 10H35C39 10 42 14 42 18V47"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sleeves */}
            <path
              d="M14 18C10 22 9 30 9 36V47H14M42 18C46 22 47 30 47 36V47H42"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Jacket Details */}
            <path
              d="M21 10V47M35 10V47"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="30" r="1.5" fill="black" />
            <circle cx="28" cy="36" r="1.5" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: i18n.t("category.categories.0"),
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M14 47V16C14 12 17 8 21 8H35C39 8 42 12 42 16V47"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 16C10 20 9 28 9 34V47H14M42 16C46 20 47 28 47 34V47H42"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 8V47M35 8V47"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="28" r="1.5" fill="black" />
            <circle cx="28" cy="34" r="1.5" fill="black" />
            <circle cx="28" cy="40" r="1.5" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ),
      name: i18n.t("category.categories.1"),
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M20 10L28 16L36 10"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18C14 14 17 10 21 10H35C39 10 42 14 42 18V46C42 48.2 40.2 50 38 50H18C15.8 50 14 48.2 14 46V18Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18C10 22 9 28 9 34V47H14M42 18C46 22 47 28 47 34V47H42"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="26" r="1.5" fill="black" />
            <circle cx="28" cy="32" r="1.5" fill="black" />
            <circle cx="28" cy="38" r="1.5" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ),
      name: i18n.t("category.categories.2"),
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M14 18C10 14 10 10 18 10H38C46 10 46 14 42 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18V46C14 48.2 15.8 50 18 50H38C40.2 50 42 48.2 42 46V18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 10C22 12 25 14 28 14C31 14 34 12 34 10"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ),
      name: i18n.t("category.categories.3"),
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M14 48V18C14 14 18 10 22 10H34C38 10 42 14 42 18V48"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 10L18 24L28 30L38 24L34 10"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 30L28 38L30 30L28 26L26 30Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      name: i18n.t("category.categories.4"),
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M18 22C18 14 24 8 28 8C32 8 38 14 38 22"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22H44L40 46H16L12 22Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="24"
              y="30"
              width="8"
              height="6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="28"
              y1="36"
              x2="28"
              y2="40"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="56" height="56" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ),
      name: i18n.t("category.categories.5"),
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {categories.map((category, index) => (
        <Grid item key={index} xs={8} sm={6} md={4} lg={2} xl={2}>
          <Category icon={category.icon} name={category.name} />
        </Grid>
      ))}
    </Grid>
  );
};

const Categories = () => {
  return (
    <div className="px-4 py-12 ">
      <RedTitle title={i18n.t("category.redTitle")} />
      <div className="flex gap-20 flex-col md:flex-row  mb-8">
        <h2 className="text-xl md:text-3xl font-semibold ">
          {i18n.t("category.title")}
        </h2>
        <Arrows />
      </div>
      <CategoryList />
    </div>
  );
};

export default Categories;

Category.propTypes = {
  icon: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
