












'use script';

let number0films;

function start(){
   number0films=+prompt('Shumo chand filmro tamosh kardaed','');
   while( number0films=='' ||  number0films == null || isNaN(number0films)){
      number0films=+prompt('Shumo chand filmro tamosh kardaed','');
   }
}

start();

 const personalMovieDb={
    couns:number0films,
    movies:{},
    actor:{},
    genres:[],
    privat:false

 };
 function rememberMyFilmS(){
   for(let i=0;i<2;i++){
      const a=prompt('Yake az ochirin filmhoe ki shomo dided',''),
            b=prompt('Uro chi kadar baho vedihed','');
  
        if(a!=null && b!=null && a!='' && b!='' && a.length < 50) {
            personalMovieDb.movies[a]=b;
            console.log('done');
        } else {
           console.log('error');
           i--;
         }
     } 
 }


function detectpersonalLevel(){
   if(personalMovieDb.count<10){
      console.log("бисьёр фильмхо тамошо карданд");
 } else if (personalMovieDb.count >=10 && personalMovieDb.count<30){
     console.log("шумо тамошобини классикӣ ҳастед");
 } else if(personalMovieDb.count>=30){
     console.log("шумо кинофилm ҳастед");
 }else  {
     console.log("Oshipka");
 } 
}



function showMyDB(hidden){
   if(!hidden){
   console.log(personalMovieDb.privat);
   }
}

showMyDB(personalMovieDb.privat);

function writeYourGenres(){
   for (let i= 1;i <= 3;i++){
      const genre =prompt(`Janri dustdoshtai shumo ${i}`);
      personalMovieDb.genres[3] = genre;
   }
}

writeYourGenres();

