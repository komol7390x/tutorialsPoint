export class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // asosiy Error classga message uzatiladi
        this.statusCode = statusCode;
        
        // 4xx -> fail, 5xx -> error
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        
        // Bu error "operational" ekanligini belgilaydi (programm bug emas, boshqariladigan xato)
        this.isOperational = true;

        // Stack trace faqat shu klassdan boshlansin (Error constructor emas)
        Error.captureStackTrace(this, this.constructor);
    }
}