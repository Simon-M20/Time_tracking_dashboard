const changeData = async time => {
    let period;

    try {
        let res = await fetch("./data.json");
        let data = await res.json();

        // console.log(data);

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        };
        
        if (time === 'daily') {
            period = "Yesterday";
        }
    
        
        if(time === "monthly") {
            period = "Last Month";
        }
    
        if (time === 'weekly') {
            period = "Last Week";
            
        }

        document.getElementById("current-work-time").textContent = `${data[0].timeframes[time].current}hrs`;
        document.getElementById("previous-work-time").textContent = `${period} - ${data[0].timeframes[time].previous}hrs`;

        document.getElementById("current-play-time").textContent = `${data[1].timeframes[time].current}hrs`;
        document.getElementById("previous-play-time").textContent = `${period} - ${data[1].timeframes[time].previous}hrs`;

        document.getElementById("current-study-time").textContent = `${data[2].timeframes[time].current}hrs`;
        document.getElementById("previous-study-time").textContent = `${period} - ${data[2].timeframes[time].previous}hrs`;

        document.getElementById("current-exercise-time").textContent = `${data[3].timeframes[time].current}hrs`;
        document.getElementById("previous-exercise-time").textContent = `${period} - ${data[3].timeframes[time].previous}hrs`;

        document.getElementById("current-social-time").textContent = `${data[4].timeframes[time].current}hrs`;
        document.getElementById("previous-social-time").textContent = `${period} - ${data[4].timeframes[time].previous}hrs`;

        document.getElementById("current-selfcare-time").textContent = `${data[5].timeframes[time].current}hrs`;
        document.getElementById("previous-selfcare-time").textContent = `${period} - ${data[5].timeframes[time].previous}hrs`;
    
    } catch (err) {
        console.log(err);
    }
}

document.addEventListener("click", e => {
    if (e.target.matches('#weekly *')) {
        // let weekly = e.target;
        changeData("weekly")
        // console.log(e.target);
    }

    if (e.target.matches('#daily *')) {
        changeData("daily")
    }

    if (e.target.matches('#monthly *')) {
        changeData("monthly")
    }
})


document.addEventListener("DOMContentLoaded", e => {
    changeData("weekly")
})