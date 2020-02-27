//Author  : Harsh K Trivdi
///This function is used to serialize the form to json
//pass form id to getFormJsonByID function and it will return a Json Object.

function getFormJsonByID( formID ) {
	var form = document.getElementById(formID )
	var obj = {};
	var elements = form.querySelectorAll( "input, select, textarea" );
	for( var i = 0; i < elements.length; ++i ) {
		var element = elements[i];
		var name = element.name;
		var value = element.value;

		if( name ) {
			obj[ name ] = value;
		}
	}

	return JSON.stringify( obj );
}

	
