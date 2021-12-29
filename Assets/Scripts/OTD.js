#pragma strict

var object : GameObject;

function OnTriggerEnter (Col : Collider) 
{
	Destroy(object);
}