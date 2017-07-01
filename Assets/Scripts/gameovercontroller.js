var gameoversound:AudioClip;

function Start () {
	GetComponent.<AudioSource>().PlayOneShot(gameoversound);
	gamecontroller.score = 0;
	gamecontroller.lives = 3;
}