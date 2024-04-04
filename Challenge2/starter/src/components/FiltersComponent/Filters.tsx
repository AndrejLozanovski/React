import axios from "axios";
import "./Filters.css";
import { apiURL } from "../constants";
import { useEffect, useState } from "react";
import { CardInterface } from "../CardComponent/CardInterface";
import { Cards } from "../CardComponent/Card";

export const Filters = () => {
  const [originalData, setOriginalData] = useState<CardInterface[]>([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [initialBikes, setInitialBikes] = useState(0);
  const [maleBikes, setMaleBikes] = useState(0);
  const [femaleBikes, setFemaleBikes] = useState(0);
  const [brandBikes, setBrandBikes] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");

  const getData = () => {
    axios(apiURL)
      .then((res) => {
        if (res.status === 200) {
          const products = res.data.products;
          setOriginalData(products);
          setFilteredBikes(products);
          calculateBikes(products);
          setInitialBikes(products.length);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const calculateBikes = (data) => {
    let maleBikes = 0;
    let femaleBikes = 0;
    const brands = {};

    data.forEach((product) => {
      if (product.gender.toUpperCase() === "MALE") {
        maleBikes++;
      } else if (product.gender.toUpperCase() === "FEMALE") {
        femaleBikes++;
      }

      brands[product.brand] = brands[product.brand] ? brands[product.brand] + 1 : 1;
    });

    setMaleBikes(maleBikes);
    setFemaleBikes(femaleBikes);
    setBrandBikes(brands);
  };

  const resetFilters = () => {
    setFilteredBikes(originalData);
    setActiveFilter("all");
  };

  const filterByGenderHandler = (gender) => {
    const filteredGender =
      gender === "MALE"
        ? originalData.filter((el) => el.gender.toUpperCase() === "MALE")
        : originalData.filter((el) => el.gender.toUpperCase() === "FEMALE");

    setFilteredBikes(filteredGender);
    setActiveFilter(gender.toLowerCase());
  };

  const filterByBrandHandler = (brand) => {
    const filteredBrand = originalData.filter((el) => el.brand === brand);

    setFilteredBikes(filteredBrand);
    setActiveFilter(brand.toLowerCase());
  };

  const renderBikeCards = () => {
    const filteredBikesCpy = [...filteredBikes];

    return filteredBikesCpy.map((el: CardInterface, key: number) => {
      return <Cards {...el} key={key} />;
    });
  };

  return (
    <>
      <div className="pt-5">
        <h1>Bikes</h1>
      </div>
      <div className="row">
        <div className="col-md-3 px-3">
          <h3 className="my-3">Filter by:</h3>
          <ul className="filter-menu">
            <li className={activeFilter === "all" ? "active" : ""} onClick={resetFilters}>
              <span>Show all</span>
              <span className="badge rounded-pill" id="allBadge">
                {initialBikes}
              </span>
            </li>
          </ul>

          <hr />

          <h4 className="my-3">Gender</h4>
          <ul className="filter-menu">
            <li
              className={activeFilter === "male" ? "active" : ""}
              onClick={() => filterByGenderHandler("MALE")}
            >
              <span>Male</span>
              <span className="badge rounded-pill" id="maleBadge">
                {maleBikes}
              </span>
            </li>
            <li
              className={activeFilter === "female" ? "active" : ""}
              onClick={() => filterByGenderHandler("FEMALE")}
            >
              <span>Female</span>
              <span className="badge rounded-pill" id="femaleBadge">
                {femaleBikes}
              </span>
            </li>
          </ul>

          <hr />

          <h4 className="my-3">Brand</h4>
          <ul className="filter-menu">
            {Object.keys(brandBikes).map((brand) => (
              <li
                key={brand}
                className={activeFilter === brand.toLowerCase() ? "active" : ""}
                onClick={() => filterByBrandHandler(brand)}
              >
                <span>{brand}</span>
                <span className="badge rounded-pill">{brandBikes[brand]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <div className="row">{renderBikeCards()}</div>
        </div>
      </div>
    </>
  );
};
