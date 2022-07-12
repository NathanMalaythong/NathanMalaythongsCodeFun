// Call the Web Driver
const {Builder, By, Key, util} = require("selenium-webdriver");

//random genre picker function
 function getRandomGenre(arr){
  const randomNumber = Math.floor(Math.random() * arr.length);
  const winner = arr[randomNumber];
  return winner;
}


//Array with all the Genre Names that it can choose from
var genres = new Array();
 genres = ["Action" , "Adventure" , "Comedy", "Slice of Life", " Romance", "Sci-Fi", "Supernatural", "Sports",
          "Mystery", "Horror", "Drama", "Fantasy", "Mecha", "Space", "Video Game", "Racing", "Drifting", " Gaming", "Arcade"
        , "Crime", "Police", "Court", "Super Heroes", "Samurai", "Ninja", "Goblins", "Isekai"];


//Opening the Broswer and Doing Stuff
async function anime(){

  let animu = await new Builder().forBrowser("chrome").build();

/* Random Genre Generator
  await animu.get("https://www.generatormix.com/random-genre-generator");
  await animu.findElement(By.id("number")).click();
  await animu.findElement(By.id("number")).sendKeys(Key.BACK_SPACE);
  await animu.findElement(By.id("number")).sendKeys("1",Key.ENTER);
  await animu.findElement(By.className("btn btn-success marg-top")).click();
  const yeaLink = animu.findElement(By.className("text-center"));
  const fofofo = yeaLink.getAttribute("innerHTML");
*/


//opening the search bar and typing in a genre selected from the array of Genres
  await animu.get("https://myanimelist.net");
  await animu.findElement(By.className("non-link")).click();
  await animu.findElement(By.linkText("Anime Search")).click();
  await animu.findElement(By.id("advancedsearch")).click();

//getting the random genre and also typein into search bar
  var genre = getRandomGenre(genres);
  await animu.findElement(By.id("q")).sendKeys(genre, Key.RETURN);
  await animu.findElement(By.className("pt4")).click();

//Backspacing search Tab
  for(var i = 0; i < 15; i++){
  await animu.findElement(By.id("q")).sendKeys(Key.BACK_SPACE);
}


//getting the first anime ahat pops up on that genre since the first is the most popular
const titles = animu.findElement(By.className("hoverinfo_trigger fw-b fl-l"));
var yourAnime =  titles.getAttribute("href");
var pikachu = titles.getAttribute("innerText");
await animu.get(yourAnime);


//populating text messager website service to alert me via text
await animu.get("https://www.opentextingonline.com/");
await animu.findElement(By.className("lazy form-control")).sendKeys("8645907401", Key.ENTER);
await animu.findElement(By.className("form-control md-textarea pr-3")).sendKeys("Here is your Anime of the day: ", Key.ENTER);
await animu.findElement(By.className("form-control md-textarea pr-3")).sendKeys(pikachu, Key.ENTER);



}
anime();
