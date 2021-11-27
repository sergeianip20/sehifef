import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
		user: 'krylevsky-test@yandex.ru',
		pass: 'Krylevsky2021'
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'krylevsky-test <krylevsky-test@yandex.ru>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;