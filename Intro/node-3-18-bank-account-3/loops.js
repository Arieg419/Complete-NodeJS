// countDownWhile(startingPoint, stoppingPoint)
function countDownWhile (startingPoint, stoppingPoint) {
	while (startingPoint >= stoppingPoint) {
		console.log('coundDownWhile: ' + startingPoint);
		startingPoint--;
	}
}

countDownWhile(10, 0);

// countDownFor
function countDownFor (startingPoint, stoppingPoint) {
	for (; startingPoint >= stoppingPoint; startingPoint--) {
		console.log('coundDownFor: ' + startingPoint);
	}
}

countDownFor(20, 10);