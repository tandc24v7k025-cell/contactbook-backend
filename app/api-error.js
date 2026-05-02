class ApiError extends Error {
    // Thêm chữ 's' vào đây 👇
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;