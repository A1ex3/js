function block() {
	$('#block').val('О, теперь на меня больше не нажать!').attr('disabled', true);
	$('#unblock').css('display', 'block');
}
function unblock() {
	$('#block').val('О, на меня снова можно нажимать').attr('disabled', false);
	$('#unblock').css('display', 'none');

}