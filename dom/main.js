function go() {
	var test1 = document.getElementById('test1');
	var test2 = document.getElementById('test2');
	var tmp = test1.value;
	test1.value = test2.value;
	test2.value = tmp;
}