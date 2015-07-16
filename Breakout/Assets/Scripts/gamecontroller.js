var Block:GameObject;
static var score:int = 0;
static var lives:int = 3;

function Start() 
{
	createBlocks();
}

function Update() {

}

function OnGUI()
{
	GUI.color = Color.white;
	GUI.Label (Rect(110,10,100,50), "Scores: " + score);

	GUI.color = Color.white;
	GUI.Label (Rect(810,10,100,50), "Lives: " + lives);
}

function createBlocks()
{
	for(var i:int = -5; i < 6; i++)
	{
		Instantiate(Block,Vector3(i * 21, 10, 0), Quaternion.identity);
	}
	
	for(var j:int = -5; j < 6; j++)
	{
		Instantiate(Block,Vector3(j * 21, 20, 0), Quaternion.identity);
	}
	
	for(var k:int = -5; k < 6; k++)
	{
		Instantiate(Block,Vector3(k * 21, 30, 0), Quaternion.identity);
	}
	
	for(var l:int = -5; l < 6; l++)
	{
		Instantiate(Block,Vector3(l * 21, 40, 0), Quaternion.identity);
	}
	
	for(var m:int = -5; m < 6; m++)
	{
		Instantiate(Block,Vector3(m * 21, 50, 0), Quaternion.identity);
	}
	
	for(var n:int = -5; n < 6; n++)
	{
		Instantiate(Block,Vector3(n * 21, 60, 0), Quaternion.identity);
	}
}