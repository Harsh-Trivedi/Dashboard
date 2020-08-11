//Author  : Harsh K Trivdi
///This function is used to serialize the form to json
//pass form id to getFormJsonByID function and it will return a Json Object.

function GetFormJsonByID(formID) {
	var form = document.getElementById(formID)
	var obj = {};
	var elements = form.querySelectorAll("input, select, textarea");
	for (var i = 0; i < elements.length; ++i) {
		var element = elements[i];
		var name = element.name;
		var value = element.value;

		if (name) {
			obj[name] = value;
		}
	}

	return JSON.stringify(obj);
}


//This function is use to populate json data to form
//pass form and Json Data to it.

function PopulateFormFromJson(frm, data) {
	$.each(data, function (key, value) {
		var ctrl = $('[name=' + key + ']', frm);
		switch (ctrl.prop("type")) {
			case "radio": case "checkbox":
				ctrl.each(function () {
					if ($(this).attr('value') == value) $(this).attr("checked", value);
				});
				break;
			default:
				ctrl.val(value);
		}
	});
}


//HTML encoding is simply replacing &, ", ', < and > chars with their entity equivalents. Order matters, if you don't replace the & chars first, you'll double encode some of the entities:
function ReplaceEscapeXMLEncode(str) {
	return str.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}



//Conversely if you want to decode HTML entities, make sure you decode &amp; to & after everything else so that you don't double decode any entities:
function ReplaceEscapeXMLDecode(str) {
	return this.replace(/&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&gt;/g, '>')
		.replace(/&lt;/g, '<')
		.replace(/&amp;/g, '&');
}

//check for null undefined or empty string

function IsNullOrEmpty(val) {
	return (val === undefined || val == null || val.length <= 0) ? true : false;
}

