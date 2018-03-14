function getTempCallback (locaton, callBack){
  callBack(undefined, 78);
  callBack('City not found');
}

getTempCallback('Johannesburg', function (err,temp){
  if(err){
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location){
  return new Promise(function(resolve.reject){
    resolve(79);
    reject("City not found");
  });
}

getTempPromise('Johannesburg').then(function(temp){
  console.log('promises success');
}, function (err){
  console.log();
}
})
