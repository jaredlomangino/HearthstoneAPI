fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "bb9e83cdfemsh39788a29ababa6dp1edc8ajsnbdfe142ae585"
	}
})
.then((response) => {
    return response.json();
  })
.then((card) => {
    generateHtml(card);
})

  const generateHtml = (card) => {
      console.log(card);
      const html = `
      <div class="name">${card[0].name}</div>
      <img src = ${card[0].imgGold}>
      `

      const cardDiv = document.querySelector('.card')
      cardDiv.innerHTML = html
  }