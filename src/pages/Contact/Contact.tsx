import React from 'react'
import './_contact.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { FaRegUser , FaRegEnvelope , FaPhone , FaRegEdit } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsEnvelopeOpen } from 'react-icons/bs';
import Button from '../../Components/Utility/Button/Button';
import TitleSection from '../../Components/Utility/TitleSection/TitleSection';
import { useFormik } from 'formik';
import * as Yup from "yup";

const Contact: React.FC = () => {

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().max(15, 'Must be 15 characters or less').required("required"),
			email: Yup.string().email('Invalud email address').required("required"),
			phone: Yup.string().max(15, 'Must be 15 characters or less').required("required"),
			subject: Yup.string().max(15, 'Must be 15 characters or less').required("required"),
			message: Yup.string().max(256, 'Must be 15 characters or less').required("required"),
		}),
		onSubmit: values => {
			console.log(values);
			alert(JSON.stringify(values, null, 2));
		},
	})

  return (
		<>
			<Breadcrumb title="Contact" />
			<section className="contact">
				<Container>
					<form onSubmit={formik.handleSubmit}>
						<Row>
							<Col md={6}>
								<div className="custom-input">
									<input type="text" name='name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Name" />
									<FaRegUser className="icon" />
								</div>
								{formik.touched.name && formik.errors.name ? <p className="badge bg-danger">{formik.errors.name}</p> : ''}
							</Col>
							<Col md={6}>
								<div className="custom-input">
									<input type="email" name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Email" />
									<FaRegEnvelope className="icon" />
								</div>
								{formik.touched.email && formik.errors.email ? <p className="badge bg-danger">{formik.errors.email}</p> : ''}
							</Col>
							<Col md={6}>
								<div className="custom-input">
									<input type="text" name='phone' value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Phone" />
									<FaPhone className="icon" />
								</div>
								{formik.touched.phone && formik.errors.phone ? <p className="badge bg-danger">{formik.errors.phone}</p> : ''}
							</Col>
							<Col md={6}>
								<div className="custom-input">
									<input type="text" name='subject' value={formik.values.subject} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Subject" />
									<FaRegEdit className="icon" />
								</div>
								{formik.touched.subject && formik.errors.subject ? <p className="badge bg-danger">{formik.errors.subject}</p> : ''}
							</Col>
							<Col md={12}>
								<div className="custom-input">
									<textarea name="message" value={formik.values.message} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Message'></textarea>
								</div>
								{formik.touched.message && formik.errors.message ? <p className="badge bg-danger">{formik.errors.message}</p> : ''}
							</Col>
						</Row>
						<div className="form-button text-center">
							{/* <Button title="Submit Now" /> */}
							<button className='custom-button' type="submit">Submit Now</button>
						</div>
					</form>
					<div className="info">
						<Row>
							<Col md={6}>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48362.387441841456!2d-74.01886140825273!3d40.74774362788148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Binas%C4%B1!5e0!3m2!1str!2str!4v1672787136957!5m2!1str!2str" loading="lazy"></iframe>
							</Col>
							<Col md={6}>
								<TitleSection title="QUICK CONTACT" subTitle="Need Help? Contact Us" center={false} />
								<p>Available to our business customers 24 hours a day.</p>
								<ul className="list-unstyled">
									<li className="d-flex align-items-center gap-3">
										<div className="icon">
											<MdLocationOn />
										</div>
										<div className="content">
											<h5 className="title">Our Location:</h5>
											<span>27 Division St, New York, NY 10002, United States.</span>
										</div>
									</li>
									<li className="d-flex align-items-center gap-3">
										<div className="icon">
											<AiOutlinePhone />
										</div>
										<div className="content">
											<h5 className="title">24/7 Hotline:</h5>
											<span>+8 (123) 985 789, +8 (123) 985 535</span>
										</div>
									</li>
									<li className="d-flex align-items-center gap-3">
										<div className="icon">
											<BsEnvelopeOpen />
										</div>
										<div className="content">
											<h5 className="title">Email:</h5>
											<span>volia.newyork@gmail.com</span>
										</div>
									</li>
								</ul>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
  )
}

export default Contact
