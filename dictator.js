/*
Author  : Harsh K Trivdi
This javascript contain some usefull function that save your time. 
*/


/**
 * This function is used to check the given object is undefined || null || length <= 0 
 * if any of them is true then it return true otherwise it return false.
 * @param {object} val 
 */
function IsNullOrEmpty(val) {
	return (val === undefined || val == null || val.length <= 0) ? true : false;
}


/**
 * This function is used to get form data in json. It will get the value of elements by name not by id.
 * @param {string} formID 
 */
function GetFormJsonByID(formID) {
	if (IsNullOrEmpty(formID)) {
		return;
	}
	const FORM = document.getElementById(formID)
	let formData = {};
	let formElements = FORM.querySelectorAll("input, select, textarea");
	for (var i = 0; i < formElements.length; ++i) {
		let currentElement = formElements[i];
		let name = currentElement.name;
		let value = currentElement.value;
		if (name) {
			formData[name] = value;
		}
	}
	return formData;
}


/**
 * This function is used to set form data by json. It will set the value of elements by name not by id.
 * @param {string} frm 
 * @param {JSON} data 
 */
function PopulateFormFromJson(frm, data) {
	if (!IsNullOrEmpty(frm) && !IsNullOrEmpty(frm)) {
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
}


/**
 *HTML encoding is simply replacing &, ", ', < and > chars with their entity equivalents.0
 *Order matters, if you don't replace the & chars first, you'll double encode some of the entities:
 * @param {string} str 
 */
function ReplaceEscapeXMLEncode(str) {
	if (IsNullOrEmpty(str)) {
		return;
	}
	return str.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}


/**
 *Conversely if you want to decode HTML entities, make sure you decode &amp; to & after everything else so that you don't double decode any entities: 
 * @param {string} str 
 */
function ReplaceEscapeXMLDecode(str) {
	if (IsNullOrEmpty(str)) {
		return;
	}
	return str.replace(/&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&gt;/g, '>')
		.replace(/&lt;/g, '<')
		.replace(/&amp;/g, '&');
}





