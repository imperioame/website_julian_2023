import {
    SMTPClient 
} from 'emailjs';

export const MAIL_DATA = {
    MAILHOST: '',
    USERNAME: '',
    PASSWORD: '',
    TO: ''
}


export const SMTPClient = new SMTPClient({
	user: MAIL_DATA.USERNAME,
	password: MAIL_DATA.PASSWORD,
	host: MAIL_DATA.MAILHOST,
	ssl: true,
});




