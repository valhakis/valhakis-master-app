
exports.index = (req, res) => {
   res.send('I\'m homeless');
};

exports.add = (req, res) => {
   var name = req.body.name;
   res.send({'message': `Adding new name: ${name}.`});
   console.log(req.body);
};
