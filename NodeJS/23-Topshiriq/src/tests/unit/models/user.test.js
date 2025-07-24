const {User} =require('../../../models/user.model')
const tokenValid = require('../../../utils/Token')
const jwt = require('jsonwebtoken');
const {configFile} =require('../../../config/env.config')

describe('user.generateAuthToken', () => {
    it('should return a valid JWT', () => {
        const user = new User({ isAdmin: true });
        const token = user.generateAuthToken();
        const decodedObject = jwt.verify(token, configFile.TOKEN.ACCESS_TOKEN_KEY);
        expect(decodedObject).toMatchObject({ isAdmin: true });
    });
});