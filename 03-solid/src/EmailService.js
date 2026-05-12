class EmailService{
    constructor() {
    }
    sendEmail(to, subject, body) {
        console.log(`E-mail enviado para ${to}: ${subject}`);
    }
}

module.exports = EmailService;