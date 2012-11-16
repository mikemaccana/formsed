// If $elements value contains search, replace it with replacement
var sed = function($element, search, replacement){
  var text = $element.val()
  if ( text.indexOf(search) !== -1 ) {
    console.log('Replaced', search, 'with', replacement)
    $element.val(text.replace(search, replacement))
  }
}

$(function(){
  console.log('Hello from Formsed');
  $('input').each(function(index, element){
    sed($(element), 'old', 'new')
  })
  console.log('Formsed finished.');
})
