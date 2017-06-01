// Move the subtree of top n - 1 disks from S to I
// move the remaining disk from S to D
// Move the subtree from I to D

function doTowers (topN, from, inter, to) {
	if (topN === 1) {
		console.log(`Move Disk 1 from ${from} to ${to}`);
		return;
	}
	doTowers(topN-1, from, to, inter);
	console.log(`Move Disk ${topN} from ${from} to ${to}`);
	doTowers(topN-1, inter, from, to)
}

doTowers(6, "A", "B", "C");