// me on my birth
import life from 'existence';

(function birth() {

    var myLife = {};
    myLife.__proto__['🧬'] = new Life();

    Object.assign(myLife,{
				phase: '👶🏻',
        name: 'UncleJavscript',
        cancallMe: 'UJ' || 'JavascriptUncle',
        about: '❤️ to explore javascript world',
        instructor: 'Rajat Vishwakarma',
    })

	console.log(`Welcome to the 🌎! ${myLife.name}`);

})()