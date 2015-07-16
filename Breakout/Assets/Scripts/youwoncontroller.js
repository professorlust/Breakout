var youwonsound:AudioClip;

function Start () {
	GetComponent.<AudioSource>().PlayOneShot(youwonsound);
	gamecontroller.score = 0;
	gamecontroller.lives = 3;
}