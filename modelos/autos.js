var moongoose = require('moongoose');
var Schema = moongoose.Schema;

var AutoSchema = {
  marca: String,
  submarca: String,
  color: String,
  caballos:Number,
  segmento:String

};
module.export=moongoose.model('Autos', AutoSchema);
