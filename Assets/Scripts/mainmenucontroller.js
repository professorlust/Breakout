var quit = false;
var intro:AudioClip;
var ball:GameObject;
static var ballonscreen:boolean = false;

function Start ()
{
	GetComponent.<Renderer>().material.color = Color.black;
	GetComponent.<AudioSource>().PlayOneShot (intro);
}

function OnMouseEnter()
{
	ballonscreen = true;
	createballs();
	GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseExit()
{
	ballonscreen = false;
	GetComponent.<Renderer>().material.color = Color.black;
}

function OnMouseUp()
{
	if (quit === true)
	{
		Application.Quit();
	}
	else
	{
		Application.LoadLevel("Main Game");	
	}
}

function createballs()
{
	Instantiate (ball,Vector3(-100,56,85), Quaternion.identity);
	Instantiate (ball,Vector3(100,-56,85), Quaternion.identity);
}