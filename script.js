var w = 'WRONG',
	wr = 'You god damn right!'
$('document').ready(function() {
	function rand(min, max) {
		return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
	}
	$('#spiral').on('click', function() {
		matrSize = $('#MS').val();
		name = $('#name').val();
		matrSize = parseInt(matrSize);
		function spiral(matrSize) {
			$('table').remove();
			var
				l, r,
				arr = [],
				botArr = [],
				topArr = [],
				leftArr = [],
				rightArr = [],
				grandArr = [],
				gtopArr = [],
				templeftArr = [],
				topleft = [],
				botright = [],
				temprightArr = [];
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var tableBody = document.createElement("tdiv.arr");
			for (var i = 0; i < matrSize; i++) {
				arr[i] = []
				var row = document.createElement("tr");
				for (var j = 0; j < matrSize; j++) {
					ranNum = rand(0, 100);
					arr[i][j] = ranNum;
					var cell = document.createElement("td");
					var cellText = document.createTextNode(ranNum);
					cell.appendChild(cellText);
					row.appendChild(cell);
				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			for (var i = 0; i < matrSize / 2; i++) {
				topArr = arr[i].slice(i, matrSize - i);
				topleft.push(topArr);
				for (var j = 0; j < matrSize; j++) {
					l = arr[j][i];
					templeftArr.push(l);
				}
				leftArr = templeftArr.slice();
				leftArr.splice(0, i)
				leftArr.splice(matrSize - i - i);
				templeftArr = [];
				leftArr.splice(0, 1);
				leftArr.reverse();
				topleft.push(leftArr);
			}
			var x = 0;
			for (var i = matrSize - 1; i >= matrSize / 2; i--) {

				for (var j = 0; j < matrSize; j++) {
					r = arr[j][i];
					temprightArr.push(r);
				}
				rightArr = temprightArr.slice()
				rightArr.splice(0, x);
				rightArr.splice(matrSize - x - x)
				x++;
				temprightArr = [];
				rightArr.splice(0, 1);
				botright.push(rightArr);
				botArr = arr[i].slice(matrSize - (i + 1), i + 1)
				botArr.splice(0, 1)
				botArr.reverse();
				botArr.splice(0, 1)
				botright.push(botArr);
			};
			topArr = [];
			leftArr = [];
			botArr = [];
			rightArr = [];
			var y = 0,
				z = 0;
			for (var i = 0; i < matrSize; i++) {
				if ((i == 0 || i % 2 == 0) && i <= matrSize - 1) {
					topArr[y] = topleft[i].slice();
					rightArr[y] = botright[i].slice();
					y++
				}
				if (i >= 1 && i % 2 != 0) {
					leftArr[z] = topleft[i].slice();
					botArr[z] = botright[i].slice();
					z++
				}
			}
			for (var i = 0; i < matrSize; i++) {
				grandArr = grandArr.concat(topArr[i], rightArr[i], botArr[i], leftArr[i]);
			}
			grandArr = grandArr.filter(function(x) {
				return x !== undefined && x !== null;
			});
			console.table(arr);
			console.log(grandArr)
			return grandArr;
		}
		var output = spiral(matrSize);
		output = output.join(', ')
		$('#output').html(output);
		$('#u').html(wr);
	})
	$('#clock').on('click', function() {
		$('table').remove();
		var matrSize, name;
		matrSize = $('#MS').val();
		name = $('#name').val();
		matrSize = parseInt(matrSize);

		function clockwise(matrSize) {
			var
				arr = [],
				botArr = [],
				topArr = [],
				leftArr = [],
				rightArr = [],
				grandArr = [];
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var tableBody = document.createElement("tdiv.arr");
			for (var i = 0; i < matrSize; i++) {
				arr[i] = []
				var row = document.createElement("tr");
				for (var j = 0; j < matrSize; j++) {
					ranNum = rand(0, 100);
					arr[i][j] = ranNum;
					var cell = document.createElement("td");
					var cellText = document.createTextNode(ranNum);
					cell.appendChild(cellText);
					row.appendChild(cell);
					if (i == 0) {
						topArr.push(ranNum)
					}
					if (i == matrSize - 1) {
						botArr.push(ranNum);
					}
					if ((i >= 1 && i < matrSize - 1) && j == matrSize - 1) {
						rightArr.push(ranNum);
					}
					if ((i >= 1 && i < matrSize - 1 && j == 0)) {
						leftArr.push(ranNum);
					}
				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			leftArr = leftArr.reverse();
			botArr = botArr.reverse();
			grandArr = topArr.concat(rightArr, botArr, leftArr);
			console.table(arr);
			console.log(grandArr);
			return grandArr;
		}
		var output = clockwise(matrSize);
		output = output.join(', ')
		$('#output').html(output);
		$('#u').html(wr);
	})
	$('#counter').on('click', function() {
		$('table').remove();
		var matrSize, name;
		matrSize = $('#MS').val();
		name = $('#name').val();
		matrSize = parseInt(matrSize);

		function СС(matrSize) {
			var
				arr = [],
				botArr = [],
				topArr = [],
				leftArr = [],
				rightArr = [],
			grandArr = [];
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var tableBody = document.createElement("tdiv.arr");
			for (var i = 0; i < matrSize; i++) {
				arr[i] = []
				var row = document.createElement("tr");
				for (var j = 0; j < matrSize; j++) {
					ranNum = rand(0, 100);
					arr[i][j] = ranNum;
					var cell = document.createElement("td");
					var cellText = document.createTextNode(ranNum);
					cell.appendChild(cellText);
					row.appendChild(cell);

					if (i == 0 && j > 0) {
						topArr.push(ranNum);
					}
					if (i == matrSize - 1) {
						botArr.push(ranNum);
					}
					if ((i >= 1 && i < matrSize - 1) && j == matrSize - 1) {
						rightArr.push(ranNum);
					}
					if ((i >= 0 && i < matrSize - 1 && j == 0)) {
						leftArr.push(ranNum);
					}
				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			rightArr = rightArr.reverse();
			topArr = topArr.reverse();
			grandArr = leftArr.concat(botArr, rightArr, topArr);
			console.table(arr);
			console.log(grandArr);
			return grandArr;
		}
		var output = СС(matrSize);
		output = output.join(', ')
		$('#output').html(output);
		$('#u').html(wr);
	})
	$('#tclock').on('click', function() {
		$('table').remove();
		var matrSize, name;
		matrSize = $('#MS').val();
		name = $('#name').val();
		matrSize = parseInt(matrSize),
			arr = [],
			topArr = [],
			rightArr = [],
			gipoArr = [],
			grandArr = [];
		function tclock(matrSize) {
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var tableBody = document.createElement("tdiv.arr");
			for (var i = 0; i < matrSize; i++) {
				arr[i] = []
				var row = document.createElement("tr");
				for (var j = 0; j < matrSize; j++) {
					ranNum = rand(0, 100);
					arr[i][j] = ranNum;
					var cell = document.createElement("td");
					var cellText = document.createTextNode(ranNum);
					cell.appendChild(cellText);
					row.appendChild(cell);
					if (i == 0) {
						topArr.push(ranNum);
					}
					if ((i >= 1 && i < matrSize) && j == matrSize - 1) {
						rightArr.push(ranNum);
					}
					if (i == j && i < matrSize - 1 && i != 0) {
						gipoArr.push(ranNum);
					}
				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			gipoArr = gipoArr.reverse();
			grandArr = topArr.concat(rightArr, gipoArr);
			console.table(arr);
			console.log(grandArr);
			return grandArr;
		}
		var output = tclock(matrSize);
		output = output.join(', ')
		$('#output').html(output);
		$('#u').html(wr);
	})
	$('#tcountclock').on('click', function() {
		$('table').remove();
		var matrSize, name;
		matrSize = $('#MS').val();
		name = $('#name').val();
		matrSize = parseInt(matrSize),
			arr = [],
			topArr = [],
			rightArr = [],
			gipoArr = [],
			grandArr = [];
		function tcountclock(matrsize) {
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var tableBody = document.createElement("tdiv.arr");
			for (var i = 0; i < matrSize; i++) {
				arr[i] = []
				var row = document.createElement("tr");
				for (var j = 0; j < matrSize; j++) {
					ranNum = rand(0, 100);
					arr[i][j] = ranNum;
					var cell = document.createElement("td");
					var cellText = document.createTextNode(ranNum);
					cell.appendChild(cellText);
					row.appendChild(cell);
					if (i == 0 && j != 0) {
						topArr.push(ranNum);
					}
					if ((i >= 1 && i < matrSize) && j == matrSize - 1) {
						rightArr.push(ranNum);
					}
					if (i == j && i < matrSize - 1) {
						gipoArr.push(ranNum);
					}
				}
				tableBody.appendChild(row);
			}
			table.appendChild(tableBody);
			body.appendChild(table);
			rightArr = rightArr.reverse();
			topArr = topArr.reverse();
			grandArr = topArr.concat(gipoArr, rightArr);
			console.table(arr);
			console.log(grandArr);
			return grandArr;
		}
		var output = tcountclock(matrSize);
		output = output.join(', ')
		$('#output').html(output);
		$('#u').html(wr);
	})
})


	
