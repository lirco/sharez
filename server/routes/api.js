
/*
 * API routes
 */

exports.add_item = function(req, res){
  console.log(req.db);
  var newItem = req.body;
  newItem['type'] = 'link';

  req.db.insert(newItem, function(err) {
    if (err) { console.error(err); }
  });
  res.json('Item added');
};