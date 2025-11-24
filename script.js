//your JS code here. If required.

let level=document.qeurySelector('#level');
let cnt=1;
while(level.tagName!=='HTML'){
level=level.parentElement;
	cnt++;
}
alert('The level of the element is:',cnt);

