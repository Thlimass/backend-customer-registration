

module.exports = {
    index(req,res) {
        res.json({message: 'Hello World from Controller Customer'});
    },
    create(req, res){
        let msg = '';
        res.json({msg:msg});
    }
}
