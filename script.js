function fetchtodo(params) {
 fetch("https://todo.egysnakes.com/tasks")
.then(response => response.json())
.then(data => {
    const tasksContainer = document.querySelector('.tasks');

    console.log(data);
     data.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = task.item;
        tasksContainer.appendChild(taskElement);
    });
})
.catch(error => console.error(error));

    
}





// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const checkButton = document.getElementById("checkButton");
    const resultParagraph = document.getElementById("result");
  
    checkButton.addEventListener("click", () => {
      const name = nameInput.value;
  
      // إرسال البيانات إلى الخادم والتحقق من وجود الحرف 'a'
      const dataToSend = {
        name,
      };
  
      fetch('https://todo.egysnakes.com/checkName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          resultParagraph.textContent = data.result;
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
  