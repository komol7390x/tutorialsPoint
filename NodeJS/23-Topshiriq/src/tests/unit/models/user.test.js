import { User } from '../../../models/user.model';
import tokenValid from '../../../models/user.model.js'
import jwt from 'jsonwebtoken';
import { configFile } from '../../../config/env.config';
 
describe('user.generateAuthToken', () => {
    it('should return a valid JWT', () => {
        const user = new User({ isAdmin: true });
        const token = tokenValid.AccessToken(user,configFile.TOKEN.ACCESS_TOKEN_KEY)
        const decodedObject = jwt.verify(token, configFile.TOKEN.ACCESS_TOKEN_KEY);
        expect(decodedObject).toMatchObject({ isAdmin: true });
    });
});