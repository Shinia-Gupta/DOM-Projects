// console.log('Project 5');
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `<div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Key</th>
  </tr>
  <tr>
    <td>${event.key === ' ' ? 'Space' : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
  
</table>
  </div>
  `;
});
