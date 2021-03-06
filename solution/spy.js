var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  // Spy function takes an object and a method and starts spying on method calls.
  // It knows how many times it was called and with what arguments.
  // So Spy function returns an object with two methods: count and args.
  //
  // * count returns number of method calls
  // * args returns an array of arrays of arguments
    function decorator(){
         target["decorator"] = target[method];
        target[method] = function(){
            spyObj.count++;
            if(arguments.length>0){
			var argsAsArr = [];
            for(var i=0; i<arguments.length; i++) {
                argsAsArr[i] = arguments[i];
            }
            spyObj.args.push(argsAsArr);}
            return target["decorator"].apply(target,arguments);
        }
}
	decorator();
	
	var spyObj = {
                count: 0,
                args: []
                };
        return spyObj;
}

module.exports = Spy
