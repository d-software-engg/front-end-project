var todoList;
const startDate = new Date('2024-01-01').getTime();
const endDate = new Date('2024-07-01').getTime();

function getRandomDate(start, end) {
    const randomTimestamp = start + Math.random() * (end - start);;
    const date = new Date(randomTimestamp);
    
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
}

function getData() {
    /*
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
        
        if (!response.ok) {
            throw new Error('Error fetching data');
        }

        const data = await response.json();

        todoList = data.map(d => ({
            ...d,
            creationDate: getRandomDate(startDate, endDate)
        }))

        console.log(todoList);
        createTableBody(todoList);
    } catch (error) {
        console.error('error:', error);
    }
    */

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching data');
        }

        return response.json();
    })
    .then(data => data.map(d => ({
            ...d,
            creationDate: getRandomDate(startDate, endDate)
        })
    ))
    .then(processedData => {
        todoList = processedData;
        console.log(todoList);
        createTableBody(todoList);
    })
    .catch(error => {
        console.error('error:', error);
    });
}

function mapCreationDateAndBuildRow(data) {
    return;
}

function createTableBody(data) {
    const tableBody = document.querySelector('#tableBody');
    const tableHTML = data.map(d => `
        <tr>
            <td>
                <i class="fa-regular fa-square"></i>
                <i class="fa-regular fa-pen-to-square"></i>
            </td>
            <td class="item-row">
                ${d.title}</td>
            <td class="item-row">${d.creationDate}</td>
            <td><i class="fa-regular fa-trash-can"></i></td>
        </tr>
    `).join('');

    tableBody.innerHTML = tableHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('TT-1 sub-task-1 DOMContentLoaded');
    getData();
});