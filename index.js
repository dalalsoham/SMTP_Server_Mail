const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
    onConnect(session, cb){
        console.log(`onConnect`, session.id);
        cb();
    },
    
});

server.listen(25, () => console.log('Server running on 25'));