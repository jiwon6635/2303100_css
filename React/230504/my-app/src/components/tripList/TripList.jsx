import './TripList.css'

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];
function TripList() {

    // key 값을 넣기 마땅하지 않을때 index 추가해줘라~
    let areas = list.map((item) => {
        return (
            <li key={item.no} className={item.visited ? "list-area-item active" : "list-area-item"}>{item.area}</li>
        )
    });

    return <ul className="list-area">{areas}</ul>
}

export default TripList;