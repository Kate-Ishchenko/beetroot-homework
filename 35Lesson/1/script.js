const playlist = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  }, 
  {
    author: "Без обмежень",
    song: "Зорі"
  }
];

// Make the list
let ol = document.createElement('ol');

// Make the list item
let li = document.createElement('li');

document.querySelector('#list-container').appendChild(ol);

playlist.forEach((item) => {
    // Add the item text
    li.innerHTML += `Author: ${item.author}, Song: ${item.song}`;

    // Add li to the ul
    ol.appendChild(li);

    // Reset the list item
    li = document.createElement('li');
});