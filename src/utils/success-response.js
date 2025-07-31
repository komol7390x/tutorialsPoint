export const successRes = (res, resData, statusCode = 200) => {
    return res.status(statusCode).json({
        statusCode,
        message: 'success',
        data: resData
    })
}
