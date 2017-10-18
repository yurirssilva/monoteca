module.exports = function(rota, app, jwt) {
  rota.use(function(req, res, next) {

    console.log('Alguma operação realizada.');
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token) {
      jwt.verify(token, app.get('superNode-auth'), function(error, decoded) {
        if (error) {
          return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
        } else {
          /** Se tudo correr bem, salver a requisição para o uso em outras rotas */
          req.decoded = decoded;
          next();
        }
      });

    } else {
      /** Se não tiver o token, retornar o erro 403 */
      return res.status(403).send({
        success: false,
        message: 'Não há token.'
      });
    }
  });
}
