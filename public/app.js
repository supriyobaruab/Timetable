const supriyo = document.getElementById("supriyo");
const nourin = document.getElementById("nourin");
const sujoy = document.getElementById("sujoy");
const fabiha = document.getElementById("fabiha");

const today = new Date();
const dateString = today.toLocaleDateString('en-US', { weekday: "long" });

// Function to update table rows
function updateSchedule(table, data) {
    for (let i = 1; i <= 3; i++) {
        table.rows[i].cells[0].innerHTML = data[i - 1][0]; // Subject
        table.rows[i].cells[1].innerHTML = data[i - 1][1]; // Time
        table.rows[i].cells[2].innerHTML = data[i - 1][2]; // Room
    }
}

// Function to fetch schedule data
async function loadSchedule() {
    try {
        const response = await fetch("schedule.json");
        const schedule = await response.json();
        console.log(schedule);

        if (schedule[dateString]) {
            updateSchedule(supriyo, schedule[dateString].supriyo);
            updateSchedule(nourin, schedule[dateString].nourin);
            updateSchedule(sujoy, schedule[dateString].sujoy);
            updateSchedule(fabiha, schedule[dateString].fabiha);
        }
    } catch (error) {
        console.error("Error fetching schedule:", error);
    }
}

// Load the schedule
loadSchedule();
