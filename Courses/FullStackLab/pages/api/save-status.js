import { db } from '../../lib/db';
import admin from 'firebase-admin';
import auth0 from '../../lib/auth0';

const saveStatus = async(req, res) => {
    
    const session = await auth0.getSession(req);
    
    if(session){
        
        const dados = req.body;
        const today = new Date();
        const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
        
        await db
        .collection('markers')
        .doc(currentDate)
        .collection('checks')
        .doc(session.user.sub)
        .set({
            status: dados.status,
            user: session.user.sub,
            coordinates: new admin.firestore.GeoPoint(dados.coords.lat, dados.coords.long)
        })
    }
    
    console.log(req.body);
    
    res.send({ ok: true });
}

export default saveStatus   