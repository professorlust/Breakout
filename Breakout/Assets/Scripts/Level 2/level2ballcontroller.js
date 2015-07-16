var speed:float = 4250;
var ball:GameObject;
var bricksound:AudioClip;
var wallsound:AudioClip;
var Block:GameObject;

function Start () {

}

function Update () {
	if(transform.position.y < -100)
	{
		//Lives -1
		gamecontroller.lives--;
		
		transform.position.y = GameObject.FindGameObjectWithTag("Paddle").transform.position.y+5.5;
		transform.position.x = GameObject.FindGameObjectWithTag("Paddle").transform.position.x;
		ball.GetComponent.<Rigidbody>().Sleep();
		
		var pcontroller:level2paddlecontroller;
		pcontroller = GameObject.FindGameObjectWithTag("Paddle").GetComponent(level2paddlecontroller);
		pcontroller.attachedBall = this.gameObject;
	}
	
	if(gamecontroller.lives == 0)
	{
		Application.LoadLevel("Game Over");
	}

	if(GameObject.FindGameObjectsWithTag("Block").length < 1)
	{
		Application.LoadLevel("You Won");
	}
}

function OnCollisionEnter(col:Collision)
{
	if(col.gameObject.tag == "Block")
	{
		GetComponent.<AudioSource>().PlayOneShot(bricksound,0.5);
		Destroy(col.gameObject);
		
		if(gamecontroller.score >=0)
		{
			gamecontroller.score = gamecontroller.score + 10;
		}
	}
	
	if(col.gameObject.tag == "Wall")
	{
		GetComponent.<AudioSource>().PlayOneShot(wallsound,0.5);
	}
}