var Block:GameObject;

function Start() 
{
	createBlocks();
}

function Update() {

}

function OnGUI()
{
	GUI.color = Color.white;
	GUI.Label (Rect(100,10,100,50), "Scores: " + gamecontroller.score);

	GUI.color = Color.white;
	GUI.Label (Rect(810,10,100,50), "Lives: " + gamecontroller.lives);
}

function createBlocks()
{
	for(var i:int = -5; i < 6; i++)
	{
		Instantiate(Block,Vector3(i * 21, 10, 0), Quaternion.identity);
	}
	
	for(var j:int = -4; j < 5; j++)
	{
		Instantiate(Block,Vector3(j * 21, 20, 0), Quaternion.identity);
	}
	
	for(var k:int = -3; k < 4; k++)
	{
		Instantiate(Block,Vector3(k * 21, 30, 0), Quaternion.identity);
	}
	
	for(var l:int = -2; l < 3; l++)
	{
		Instantiate(Block,Vector3(l * 21, 40, 0), Quaternion.identity);
	}
	
	for(var m:int = -1; m < 2; m++)
	{
		Instantiate(Block,Vector3(m * 21, 50, 0), Quaternion.identity);
	}
	
	for(var n:int = -0; n < 1; n++)
	{
		Instantiate(Block,Vector3(n * 21, 60, 0), Quaternion.identity);
	}
}