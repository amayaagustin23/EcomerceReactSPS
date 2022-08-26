import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./contact.css"

const Contact = () => {
  return (
    <div style={{backgroundColor:'#403F3D'}}>
    <Navbar />
        <form action="">
        <h2>Deje su consulta y dentro de las 48hs un agente se contactará con usted.</h2>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">País:</label>
            <select class="form-select" aria-label="Default select example">
                <option value="0" selected disabled>Seleccionar...</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Mexico">Mexico</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button type="submit" class="butonContact">Enviar</button>
    </form>
    <Footer/>
  </div>
  )
}

export default Contact