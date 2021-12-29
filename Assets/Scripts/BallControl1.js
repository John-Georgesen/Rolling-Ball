#pragma strict

var speed : int;
var jumpHeight = 10;

private var isFalling = false;

function Update ()
{
	GetComponent.<Rigidbody>().velocity.x = speed;
	
	
	if (Input.GetButton("Fire1"))
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
}