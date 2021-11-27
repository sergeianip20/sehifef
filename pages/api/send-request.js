import sendEmail from './../../lid/mail';

export default async function handler(req, res) {
	const message = {
		to: 'erichkrauser301@yandex.ru',
		subject: `Письмо с сайта VPcape от ${req.body.name}`,
		text: `
			Имя: ${req.body.name}, 
        	Телефон: ${req.body.phone},
        	E-mail: ${req.body.email},
        	Сообщение: ${req.body.message},
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.name}!`);
}