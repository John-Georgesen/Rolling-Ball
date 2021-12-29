#pragma strict

var target : Transform;
var x = -30;
var distance = -10;
var lift = 1.5;

function Update () 
{
	transform.position = target.position + Vector3(x, lift, distance);
	transform.LookAt (target);
}