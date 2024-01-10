import { Link } from '../Link'
import photo from '../assets/ivan.webp'

const i18n = {
	es: {
		title: 'Sobre nosotros',
		description: '¡Hola! Me llamo Iván Ecónomo y estoy creando un clon de React Router',
		button: 'Ir a la página home'
	},
	en: {
		title: 'About us',
		description: 'Hi! My name is Iván Ecónomo and I am creating a clone of React Router.',
		button: 'Go to home page'
	}
}

const useI18n = (lang) => {
	return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
	const i18n = useI18n(routeParams.lang ?? 'es')

	return (
		<>
			<h1>{i18n.title}</h1>
			<div>
			<img src={photo} alt="Foto de Iván" style={{ maxWidth: '250px'}} />
			<p>{i18n.description}</p>
			</div>
			<Link to='/'>{i18n.button}</Link>
		</>
	)
}