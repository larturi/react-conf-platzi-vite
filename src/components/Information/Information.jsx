import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AppContext from '../../context/AppContext'
import { SEO } from '../Seo/Seo'

import './Information.css'

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const { cart } = state
  const navigate = useNavigate()

  const validationSchema = () => {
    return Yup.object({
      name: Yup.string().required('Campo obligatorio'),
      email: Yup.string()
        .email('Por favor ingresa un email válido')
        .required('Campo obligatorio'),
      phone: Yup.string().required('Campo obligatorio'),
      address: Yup.string().required('Campo obligatorio'),
      country: Yup.string().required('Campo obligatorio'),
      state: Yup.string().required('Campo obligatorio'),
      city: Yup.string().required('Campo obligatorio'),
      cp: Yup.string().required('Campo obligatorio'),
    })
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      country: '',
      state: '',
      city: '',
      cp: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const buyer = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        country: values.country,
        state: values.state,
        city: values.city,
        cp: values.cp,
      }
      addToBuyer(buyer)
      navigate('/checkout/payment')
    },
  })

  return (
    <>
      <SEO title="Platzi Conf Merch - Checkout - Información de Contacto" />

      <div className="information">
        <div className="information-content">
          <div className="information-head">
            <h2>Información de contacto</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="information-form">
              {/* Name */}
              <input
                id="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="errorInputForm">{formik.errors.name}</div>
              ) : null}
              {/* Email */}
              <input
                id="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorInputForm">{formik.errors.email}</div>
              ) : null}
              {/* Phone */}
              <input
                id="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="errorInputForm">{formik.errors.phone}</div>
              ) : null}
              {/* Address */}
              <input
                id="address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="errorInputForm">{formik.errors.address}</div>
              ) : null}{' '}
              {/* Country */}
              <input
                id="country"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className="errorInputForm">{formik.errors.country}</div>
              ) : null}
              {/* State */}
              <input
                id="state"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="errorInputForm">{formik.errors.state}</div>
              ) : null}{' '}
              {/* City */}
              <input
                id="city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="errorInputForm">{formik.errors.city}</div>
              ) : null}{' '}
              {/* CP */}
              <input
                id="cp"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cp}
              />
              {formik.touched.cp && formik.errors.cp ? (
                <div className="errorInputForm">{formik.errors.cp}</div>
              ) : null}{' '}
            </div>
            <div className="information-buttons">
              <div className="information-back">
                <Link to="/checkout">Regresar</Link>
              </div>
              <div className="information-next">
                <button type="submit">Pagar</button>
              </div>
            </div>
          </form>
        </div>

        <div className="information-sidebar">
          <h3>Pedido</h3>
          {cart.map((item) => (
            <div className="information-item" key={item.id}>
              <div className="information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
