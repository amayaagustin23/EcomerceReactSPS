import React from 'react';
import {useState, useEffect} from 'react';
import Carousel from "react-elastic-carousel";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [itemsCarrucel, setItemsCarrucel] = useState(8);

  useEffect(() => {
    setNews(JSON.parse(localStorage.getItem('news')));
    const bestSeller=[]
    const bestSellerAux=JSON.parse(localStorage.getItem('products'))
    for (let i = 0; i < 4; i++) {
      bestSeller.push(bestSellerAux[i])
    }
    setProducts(bestSeller);
  }, []);
  useEffect(()=>{
    if(window.innerWidth<600) setItemsCarrucel(3)
    else if(window.innerWidth<1200)setItemsCarrucel(5)
    else if(window.innerWidth>1200)setItemsCarrucel(8)
  },[])
  return (
    <div style={{backgroundColor:'#403F3D'}}>
      <Navbar/>
      <div className="containerHome">
        <section className="imagenPrincipal"></section>
        <section className="listarImagenes" id="listarImagenes">
        <Carousel breakPoints={news} itemsToShow={itemsCarrucel} enableAutoPlay autoPlaySpeed={2500}>
        {news.map((item,index) => (
            <div className="containerItem" key={index}>
              <img src={item.imagenes[0]} alt="Avatar" className="image" />
              <div className="overlay">
                <a className="text" id="new_${item.id}" href="./pages/newView.html">
                  {item.tituloCarrucel}
                </a>
              </div>
            </div>
          ))}
        </Carousel>

        </section>
        <section className="bestSeller">
          <h2>Los más vendidos</h2>
          <div className="containerBestSeller" id="containerBestSeller">
          {products.map((item,index) => (
             <div class="article" data-aos="zoom-in">
             <img src={item.imagenes[0]} alt=""/>
             <div class="textArticle">
               <h3>{item.nombre}</h3>
               <p>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
               <div class="overlay">
                 <div class="text" ><a id="prod_${item.id}" href="./pages/product.html">Comprar</a></div>
               </div>
             </div>
         </div>
          ))}
          </div>
        </section>
        <section className="containerVideos">
          <h2>Videos recomendados en la comunidad</h2>
          <div className="videos">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/QVFZVIOqbbc"
                title="🏀 JORDAN x PSG Jugada MAESTRA del Marketing 👈 Jersey del Paris Saint Germain Local 2021/22 Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="description">
                <h3>Camiseta PSG</h3>
                <p>Canal: Trikots Jerseys - Camisetas de Fútbol </p>
              </div>
            </div>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/KnTiDpkEtng"
                title="CÓMO DISTINGUIR una CAMISETA de FÚTBOL ADIDAS ORIGINAL de una FALSIFICACIÓN"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="description">
                <h3>Distinguir una camiseta de fútbol adidas de una falsa</h3>
                <p>Canal: XAVISETAS - Camisetas Fútbol Room </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
