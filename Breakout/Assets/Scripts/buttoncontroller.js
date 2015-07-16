var quit = false;

function Start ()
{
	GetComponent.<Renderer>().material.color = Color.black;
	}

function OnMouseEnter()
{
	GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseExit()
{
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