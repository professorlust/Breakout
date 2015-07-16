var ball:GameObject;

function Start () {
	GetComponent.<Rigidbody>().AddForce(0,4250,0);
}

function Update () {
	if(mainmenucontroller.ballonscreen == false)
	{
		Destroy (ball);
	}
}