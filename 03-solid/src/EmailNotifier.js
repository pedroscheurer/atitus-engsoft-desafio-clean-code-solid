class EmailNotifier {
    constructor(emailService) {
        this.emailService = emailService;
    }
    sendEmail(to, subject, body) {
        this.emailService.sendEmail(to, subject, body);
    }
}

module.exports = EmailNotifier;