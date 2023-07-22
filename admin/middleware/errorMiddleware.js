// const notFound = (req, res, next) => {
//     const error = new Error(`Not Found - ${req.originalUrl}`)
//     res.status(404)
//     next(error)
// };

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.message.startsWith('Cast to ObjectId failed')) {
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

module.exports = {
    errorHandler
}