import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Product.css'

const Product = () => {
	const [producto, setProducto] = useState()
	const { id } = useParams()
	const imagenes = document.getElementsByClassName('imagenesExtra')

	const eventImages = () => {
		for (let i = 0; i < imagenes.length; i++) {
            console.log(imagenes[i])
		}
	}
	const loadingData = () => {
		const list = JSON.parse(localStorage.getItem('products'))
		setProducto(list.find((item) => item.id === parseInt(id)))
		eventImages()
	}
	useEffect(() => {
		loadingData()
	}, [])

	return (
		<div>
			<Navbar />
			{producto !== undefined ? (
				<div className='containerProduct'>
					<section data-aos='zoom-in'>
						<div className='containerSection'>
							<div className='imagenProduct'>
								<ReactImageMagnify
									imageClassName='imagenPrincipal'
									{...{
										smallImage: {
											alt: 'Wristwatch by Ted Baker London',
											isFluidWidth: true,
											src: producto.imagenes[0],
										},
										largeImage: {
											src: producto.imagenes[0],
											width: 1000,
											height: 1000,
										},
									}}
								/>

								<div className='imagenesAll'>
									{producto.imagenes.map((item, indice) => (
										<img key={indice} className='imagenesExtra' src={item}></img>
									))}
								</div>
							</div>
							<div className='contenedor'>
								<h1>{producto.nombre}</h1>
								<p>Item No. {producto.item}</p>
								<br />
								<h3 className='precio'>${new Intl.NumberFormat('de-DE').format(producto.precio)}</h3>
								<div className='talles'>
									<button className='talle' value='S'>
										S
									</button>
									<button className='talle' value='M'>
										M
									</button>
									<button className='talle' value='L'>
										L
									</button>
									<button className='talle' value='XL'>
										XL
									</button>
								</div>
								<div className='containerAddCart'>
									<button id='carrito'>Agregar al carrito</button>
									<input min={0} value={0} type='number' id='count' />
								</div>
								<span id='spanNotify'></span>
							</div>
						</div>
					</section>
					<section>
						<div className='accordion mt-4' id='accordionExample'>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingOne'>
									<button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
										Descripción
									</button>
								</h2>
								<div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										<div className='descripcionProduct'>
											<p>{producto.descripcion}</p>
										</div>
										<div className='listasDesc'>
											<ol className='listDesc'>
												<li>
													<span className='descOp'>Género:</span>
													{producto.genero}
												</li>
												<li>
													<span className='descOp'>Material:</span> Poliéster
												</li>
												<li>
													<span className='descOp'>Manga: </span> Corta
												</li>
												<li>
													<span className='descOp'>Garantía:</span> Contra defecto de fabricación.
												</li>
												<li>
													<span className='descOp'>Marca: </span>
													{producto.marca}
												</li>
											</ol>
											<ol className='listDesc'>
												<li>
													<span className='descOp'>Cuello:</span>
													{producto.cuello}
												</li>
												<li>
													<span className='descOp'>Calce:</span>
													{producto.calce}
												</li>
												<li>
													<span className='descOp'>Liga: </span>
													{producto.liga}
												</li>
											</ol>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			) : null}
			<Footer />
		</div>
	)
}

export default Product
