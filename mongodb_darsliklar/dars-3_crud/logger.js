const logger = async (req, res, next) => {
    console.log('Log yozish...');
    next()
}

export {
    logger
}