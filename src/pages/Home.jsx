import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import Helmet from "../components/Helmet/Helmet"
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import "../styles/home.css"
import Services from "../services/Services"
import ProductList from '../components/UI/ProductList'
import Clock from "../components/UI/Clock"

import products from "../assets/data/products"
import counterImg from "../assets/images/counter-timer-img.png"

const Home = () => {
  const [ trendingProducts, setTrendingProducts ] = useState([])
  const [ bestSalesProducts, setBestSalesProducts ] = useState([])
  const [ mobileProducts, setMobileProducts] = useState([])
  const [ wirelessProducts, setWirelessProducts] = useState([])
  const [ popularProducts, setPopularProducts] = useState([])

  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
  var monthNumber = d.getMonth();
  var FinalMonthName = monthName[monthNumber];

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair")

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa")

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile")

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless")

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch")
    
    

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)

  },[]);

  return ( <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">
                  Trending Products in {FinalMonthName}
                </p>
                <h2>Level up Your Workflow</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur eum ad asperiores ut. Vitae quam eveniet ex cum nulla enim nisi, laborum error fugit nesciunt porro modi, corrupti nemo!</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_button">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
    <Services />
    <section className="trending_products">
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts} />
        </Row>
      </Container>
    </section>
    <section className='best_sales'>
      <Container>
      <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section_title'>Best Sales</h2>
          </Col>
          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer_count">
      <Row>
        <Col lg="6" md="12" className="count_down-col">
          <div className="clock_top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
          <Clock/>
          <motion.button whileTap={{scale: 1.2}} className='buy_button store_btn'>
            <Link to="/shop">Visit Store</Link>
          </motion.button>
        </Col>
        <Col lg="6" md="12" className="text-end counter_img">
        <img src={counterImg} alt="" />
        </Col>
      </Row>
    </section>
    <section className="new_arrivals">
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section_title'>New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts}/>
          <ProductList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>
    <section className="popular_category">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className='section_title'>Popular in Category</h2>
          </Col>
          <ProductList data={popularProducts}/>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Home