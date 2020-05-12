function abc()
{
	document.getElementById('bar').style.width='200px';
}
function def()
{
	document.getElementById('bar').style.width='0px';
}
$(window).scroll(function(){
	if($(this).scrolltop()>30)
	{
		$(".title").addclass("menu1");
	}
	else
	{
		$(".title").removeclass("menu1");
	}
})