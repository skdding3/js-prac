// Constructor

// 생성자


class ValidationError extends Error {

    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.code = '42';
    }


    printCustomerMessage() {
        return `Validation failed :( (details: ${this.message}, code: ${this.code})`;
    }
}

    try {
        throw new ValidationError("핸드폰 번호가 유효하지 않습니다.")
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(error.name);
            console.log(error.printCustomerMessage());
        } else {
            console.log('알수없는 에러', error)
            throw error;
        }
    }
