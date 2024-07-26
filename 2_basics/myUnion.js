var score = 33;
score = 44;
score = "55";
var vedant = { name: "vedant", id: 334 };
vedant = { username: "ved", id: 334 };
// function getDbId(id: number | string){
//     // making some API calls
//     console.log('DB id is: ${id');
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, "2", "3", 3, "4"];
var data4 = [1, "2", "3", 3, "4", true, false];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "crew";
