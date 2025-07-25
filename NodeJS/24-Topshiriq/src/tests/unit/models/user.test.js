import jwt from 'jsonwebtoken'
 
describe('user.generateAuthToken', () => {
    it('should return a valid JWT', async() => {
        const user = { id:25,isAdmin: true };
        const token =jwt.sign(user,'salom',{
            expiresIn:'1d'
        })
        const decodedObject =jwt.verify(token, 'salom');
        expect(decodedObject).toMatchObject({ id:25,isAdmin: true });
    });
});

