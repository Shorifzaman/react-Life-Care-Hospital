

import React from 'react';
import { render } from 'react-dom';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './slider-animations.css';


const content = [
	{
		title: 'We always put our pacients first',
		description:
		'Hello guys, I am Soren from Sirbistana. I am senior art director and founder.fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Book appoinment',
		image: 'https://technext.github.io/medic-care/images/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://technext.github.io/medic-care/images/slider/doctor-s-hand-holding-stethoscope-closeup.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Book appoinment',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];
const Banner = () => {
       return (

	<div>
		
		<Slider className="slider-wrapper ">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content w-full"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1 >{item.title}</h1>
						<p>{item.description}</p>
						<button className="hero-slider">{item.button}</button>
					</div>
					<section className="flex ">
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	</div>
);
}

export default Banner;

render(<Banner />, document.getElementById('root'));
