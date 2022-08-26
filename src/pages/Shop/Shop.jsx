/** @format */

import React from 'react'
import { useState, useEffect } from 'react'
import './Shop.css'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';



const Shop = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(null)
	const marcas = ['Adidas', 'Nike', 'Puma', 'Umbro', 'Under Armour']
	const generos = ['Hombre', 'Mujer']
	const talles = ['S', 'M', 'L', 'XL']

	const LabelColor = () => {
		let etiquetas = document.getElementsByClassName('etiqueta')
		for (let index = 0; index < etiquetas.length; index++) {
			if (etiquetas[index].innerHTML === 'OFERTA') etiquetas[index].style.backgroundColor = 'green'
			if (etiquetas[index].innerHTML === 'NUEVO') etiquetas[index].style.backgroundColor = 'orange'
		}
	}
	const loadingData =()=>{
		setProducts(JSON.parse(localStorage.getItem('products')))
		const art=document.getElementsByClassName("articulo")
		setLoading(true)
		setTimeout(() => {
			for (let index = 0; index < art.length; index++) {
				art[index].style.display="block"
			}
			LabelColor()
			setLoading(false)
		}, 1500);
	}
	useEffect(() => {
		loadingData()
	}, [])
	return (
		<div style={{backgroundColor:'#403F3D'}}>
			<Navbar />
			<div className='bodyContainerShop'>
				<aside>
					<div className='asideSection'>
						<div className='accordion' id='accordionExample'>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingTwo'>
									<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
										{' '}
										Filtros{' '}
									</button>
								</h2>
								<div id='collapseTwo' className='accordion-collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										<div className='search'>
										<Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',  }}>
											<InputBase sx={{ ml: 1, flex: 1 }} placeholder='Buscar' inputProps={{ 'aria-label': 'Buscar' }} />
											<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
												{/* <SearchIcon /> */}
											</IconButton>
											<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
										</Paper>
										</div>
										<div className='accordion' id='accordionPanelsStayOpenExample'>
											<div className='accordion-item'>
												<h2 className='accordion-header' id='panelsStayOpen-headingOne'>
													<button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne' aria-expanded='true' aria-controls='panelsStayOpen-collapseOne'>
														Genero
													</button>
												</h2>
												<div id='panelsStayOpen-collapseOne' className='accordion-collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
													{generos.map((item,index) => (
														<div className='form-check-genero'  key={index}	>
														<input className='form-check-input adidascheck' type='checkbox' value='Hombre' id='flexCheckDefault' />
															<label className='form-check-label' htmlFor='flexCheckDefault'>
																{item}
															</label>
														</div>
													))}
												</div>
											</div>
											<div className='accordion-item'>
												<h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
													<button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseTwo' aria-expanded='false' aria-controls='panelsStayOpen-collapseTwo'>
														Marcas
													</button>
												</h2>
												<div id='panelsStayOpen-collapseTwo' className='accordion-collapse' aria-labelledby='panelsStayOpen-headingTwo'>
													<div id='panelsStayOpen-collapseTwo' className='accordion-collapse' aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
														{marcas.map((item,index) => (
															<div className='form-check-marcas mt-2' key={index}>
																<input className='form-check-input adidascheck' type='checkbox' value='Adidas' id='flexCheckDefault' />
																<label className='form-check-label' htmlFor='flexCheckDefault'>
																	{item}
																</label>
															</div>
														))}
													</div>
												</div>
											</div>
											<div className='accordion-item'>
												<h2 className='accordion-header' id='panelsStayOpen-headingThree'>
													<button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseThree' aria-expanded='false' aria-controls='panelsStayOpen-collapseThree'>
														Talles
													</button>
												</h2>
												<div id='panelsStayOpen-collapseThree' className='accordion-collapse' aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
													{talles.map((item,index) => (
														<div className='form-check-talles mt-2' key={index}>
															<input className='form-check-input' type='checkbox' value='S' id='flexCheckDefault' />
															<label className='form-check-label' htmlFor='flexCheckDefault'>
																{item}
															</label>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
				<section>
				{loading?
							<div className='d-flex justify-content-center'>
							<div className='spinner-grow' style={{ width: '5rem', height: '5rem' }} role='status' id='loader'></div>
						</div>
						:null}
					<div className='containerArticulos' id='containerArticulos'>
						{products.map((item, index) => (
								<Link to={"/product/"+item.id}>
							<div data-aos='zoom-in' className='articulo' key={index} id={item.nombre} style={{display:"none"}}>
								<div className='imagen'>
									<img src={item.imagenes[0]} alt={item.nombre} title={item.nombre} />
								</div>
								<div className='textos'>
									<img src={item.logoMarca} alt={item.nombre} title={item.nombre} />
									<h3 className='title'>{item.nombre}</h3>
									<div className='precioEtiqueta'>
										<p>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
										<p className='etiqueta'>{item.etiqueta}</p>
									</div>
								</div>
							</div>
								</Link>
						))}
					</div>
				</section>
			</div>
			<div id='myModal' className='modal'>
				<div className='modal-content'>
					<div className='headerModal'>
						<h3>Mi carrito</h3>
						<span className='close'>&times;</span>
					</div>
					<div id='bodyModal'></div>
					<div className='footerModal'>
						<a href='./shoppingCart.html'>Ir al carrito</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Shop
