const mongose=require('mongoose')
mongose.connect('mongodb://localhost:27017/electron', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))

