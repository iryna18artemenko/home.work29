const table = document.querySelector("tbody");
const formElement = document.getElementById('form');


formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); 

  if (e) {
    formElement.style.display = "none"; 

    let htmlTable = `
        <tr> Ім'я: ${formData.get('name')} </tr>
        <tr> Прізвище: ${ formData.get('surname')} </tr>
        <tr> Дата нароження: ${formData.get('date')} </tr>
        <tr> Стать: ${formData.get('gender')} </tr>
        <tr> Місто: ${formData.get('cityes')} </tr>
        <tr> Адреса: ${formData.get('address')} </tr>
        <tr> Мова: ${formData.get('lang')} </tr>
        `;
      
      const html = `
          <td>
              ${htmlTable}
          </td>
      `;
  
      table.innerHTML = html;
  }
})
  