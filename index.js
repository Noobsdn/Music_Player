const songs=[
    {
        id: 1,
        songName: `<h5>Baarish<br>
                        <div class="subtitle">Arijeet Singh</div>
                    </h5>`,
        poster: "img1.jpeg",
        sname: "Baarish", 
        subtitle: "Arijeet Singh"
    },
    {
        id: 2,
        songName: `<h5>Cheekni Chameli <br>
                        <div class="subtitle">Ajay-Atul and Shreya Ghoshal</div>
                    </h5>`,
        poster: "img2.jpeg",
        sname: "Cheekni Chameli ", 
        subtitle: "Ajay-Atul and Shreya Ghosha"
    },
    {
        id: 3,
        songName: `<h5>Aharee<br>
                        <div class="subtitle">Minar</div>
                    </h5>`,
        poster: "img3.jpeg",
        sname: "Ahareer", 
        subtitle: "Minar"
    },
    {
        id: 4,
        songName: `<h5>Woh Lamhe<br>
                        <div class="subtitle">Atif Aslam</div>
                    </h5>`,
        poster: "img4.jpeg",
        sname: "Woh Lamhe", 
        subtitle: "Atif Aslam"
    },
    {
        id: 5,
        songName: `<h5>Akh Lad Jave<br>
                        <div class="subtitle">Jubin Natyiel</div>
                    </h5>`,
        poster: "img5.jpeg",
        sname: "Akh Lad Jave", 
        subtitle: "Jubin Natyiel"
    },
    {
        id: 6,
        songName: `<h5>Chal Wahan Jate Hain<br>
                        <div class="subtitle">Arijeet Singh</div>
                    </h5>`,
        poster: "img6.jpeg",
        sname: "Chal Wahan Jate Hai", 
        subtitle: "Arijeet Singh"
    },
    {
        id: 7,
        songName: `<h5>The Humma<br>
                        <div class="subtitle">A.R Rahman</div>
                    </h5>`,
        poster: "img7.jpeg",
        sname: "The Humma", 
        subtitle: "A.R Rahman"
    },
    {
        id: 8,
        songName: `<h5>Saware<br>
                        <div class="subtitle">Arijeet Singh</div>
                    </h5>`,
        poster: "img8.jpeg",
        sname: "Saware", 
        subtitle: "Arijeet Singh"
    },
    {
        id: 9,
        songName: `<h5>Ajnabi<br>
                        <div class="subtitle">Atif Aslam</div>
                    </h5>`,
        poster: "img9.jpeg",
        sname: "Ajnabi", 
        subtitle: "Atif Aslam"
    },
    {
        id: 10,
        songName: `<h5>Pehli Nazar Mein<br>
                        <div class="subtitle">Atif Aslam</div>
                    </h5>`,
        poster: "img10.jpeg",
        sname: "Pehli Nazar Mein", 
        subtitle: "Atif Aslam"
    },
    // {
    //     id: 11,
    //     songName: `<h5>Apna Bana Le<br>
    //                     <div class="subtitle">Arijeet Singh</div>
    //                 </h5>`,
    //     poster: "img11.jpeg",
    //     sname: "Apna Bana Le", 
    //     subtitle: "Arijeet Singh"
    // },
    // {
    //     id: 12,
    //     songName: `<h5>Kesariya<br>
    //                     <div class="subtitle">Arijeet Singh</div>
    //                 </h5>`,
    //     poster: "img12.jpeg",
    //     sname: "Kesariya", 
    //     subtitle: "Arijeet Singh"
    // },
    // {
    //     id: 13,
    //     songName: `<h5>Pal <br>
    //                     <div class="subtitle">Arijeet Singh</div>
    //                 </h5>`,
    //     poster: "img13.jpeg",
    //     sname: "Pal ", 
    //     subtitle: "Arijeet Singh"
    // },
    // {
    //     id: 14,
    //     songName: `<h5>Keno Megh Ashe<br>
    //                     <div class="subtitle">Arnob</div>
    //                 </h5>`,
    //     poster: "img14.jpeg",
    //     sname: "Keno Megh Ashe", 
    //     subtitle: "Arnob"
    // },
    // {
    //     id: 15,
    //     songName: `<h5>Aaj Phir<br>
    //                     <div class="subtitle">Arijeet Singh</div>
    //                 </h5>`,
    //     poster: "img15.jpeg",
    //     sname: "Aaj Phir", 
    //     subtitle: "Arijeet Singh"
    // }

]

let index=1;
const poster=document.querySelector("#poster_music_player");
const title=document.querySelector('#title');
let wave=document.querySelector(".wave");
const music=new Audio("song1.mp3");
const download=document.getElementById("download");
const change_play_type=document.getElementById("repeat");


const click_songs=document.getElementsByClassName("songItem");

Array.from(click_songs).forEach((e)=>{
    e.addEventListener('click', ()=>{
        let i=e.getElementsByTagName('span')[0];
        index=parseInt(i.innerHTML);
        // console.log(parseInt(i.innerHTML));
        music_play(index);
        
    })
})

function change_play(){
    if(change_play_type.classList[1]=="bi-repeat"){
        index++;
        if(index>songs.length)index=1;
        music_play(index);
    }
    if(change_play_type.classList[1]=="bi-repeat-1"){
        music_play(index);
    }
    if(change_play_type.classList[1]=="bi-shuffle"){
        index=Math.floor(Math.random()*songs.length);
        music_play(index);
    }
}

function music_play(index){
    music.src=`song${index}.mp3`;
    music.play();
    poster.src=`img${index}.jpeg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add("active1");
    
    // let songTitles=songs.filter((element)=>{
    //     return element.id==index;
    // });                                       //via filter 
    // title.innerHTML=songTitles[0].songName;
    songs.forEach((element)=>{
        if(element.id==index)title.innerHTML=element.songName;  //via forEach
    });
    document.querySelectorAll('.songItem').forEach((element)=>{
        element.style.background="rgb(105, 105, 105, 0)";
        element.style.opacity="1";
    });
    document.querySelectorAll('.playListPlay').forEach((element)=>{
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
    });

    document.querySelectorAll('.songItem')[index-1].style.background="rgb(105, 105, 105, 0.1)";
    document.querySelectorAll('.songItem')[index-1].style.opacity="0.9";
    document.querySelectorAll('.playListPlay')[index-1].classList.remove("bi-play-circle-fill");
    document.querySelectorAll('.playListPlay')[index-1].classList.add("bi-pause-circle-fill");
}

// document.querySelectorAll(".songItem").forEach((event, i)=>{
//     event.getElementsByTagName('img')[0].src=songs[i].poster;
//     event.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
// });


//play and pause 
let masterPlay=document.querySelector('#master_play');
masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add("active1");
        document.querySelectorAll('.playListPlay')[index-1].classList.remove("bi-play-circle-fill");
        document.querySelectorAll('.playListPlay')[index-1].classList.add("bi-pause-circle-fill");
    }
    else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove("active1");
        document.querySelectorAll('.playListPlay')[index-1].classList.add("bi-play-circle-fill");
        document.querySelectorAll('.playListPlay')[index-1].classList.remove("bi-pause-circle-fill");
    }
    document.querySelectorAll('.songItem')[index-1].style.background="rgb(105, 105, 105, 0.1)";
    document.querySelectorAll('.songItem')[index-1].style.opacity="0.6";
});


Array.from(document.querySelectorAll(".playListPlay")).forEach((e)=>{
    // console.log(e);
    e.addEventListener('click', (e)=>{
        index=e.target.id;
        music_play(index);
    })
})

download.addEventListener('click', ()=>{
    download.href=`song${index}.mp3`;
    download.download=`${songs[index-1].sname} by ${songs[index-1].subtitle}`;
});

let currentStart=document.getElementById("currentStart");
let currentEnd=document.getElementById("currentEnd");
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let mint1=String(Math.floor(music_dur/60)).padStart(2, '0');
    let sec1=String(Math.floor(music_dur%60)).padStart(2, '0');

    let mint2=String(Math.floor(music_curr/60)).padStart(2, '0');
    let sec2=String(Math.floor(music_curr%60)).padStart(2, '0');

    currentStart.innerHTML=`${mint2}:${sec2}`;
    currentEnd.innerHTML=`${mint1}:${sec1}`;

    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    bar2.style.width=`${seek.value}%`;
    dot.style.left=`${seek.value}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime=seek.value*music.duration/100;
})

let back=document.getElementById("back");
let next=document.getElementById("next");

back.addEventListener('click', ()=>{
    if(change_play_type.classList[1]=="bi-repeat"){
        index--;
        if(index<1)index=songs.length;
        music_play(index);
    }
    if(change_play_type.classList[1]=="bi-repeat-1"){
        music_play(index);
    }
    if(change_play_type.classList[1]=="bi-shuffle"){
        index=Math.floor(Math.random()*songs.length);
        music_play(index);
    }
})

next.addEventListener('click', ()=>{
    change_play();
})

change_play_type.addEventListener('click', (e)=>{
    if(e.target.classList[1]=="bi-repeat"){
        change_play_type.classList.remove("bi-repeat");
        change_play_type.classList.add("bi-repeat-1");
    }
    else if(e.target.classList[1]=="bi-repeat-1"){
        change_play_type.classList.remove("bi-repeat-1");
        change_play_type.classList.add("bi-shuffle");
    }
    else if(e.target.classList[1]=="bi-shuffle"){
        change_play_type.classList.remove("bi-shuffle");
        change_play_type.classList.add("bi-repeat");
    }
    // console.log(music.currentTime+" "+music.duration);

});


// console.log(change_play_type.classList[1]);
music.addEventListener('ended', change_play);   //shuffle, repeat and repeat next


//search part
// let search_results=document.getElementsByClassName('search_results')[0];

// let search_input=document.getElementById('search__');
// search_input.addEventListener('click', ()=>{
//     document.getElementsByClassName('menu_song')[0].classList.add('blur');
// }); 

// songs.forEach(element=>{
//     const {id, songName, poster}=element;

//     let card=document.createElement('a');
//     card.classList.add('card');
//     card.innerHTML=`
//         <img src=${poster} alt="">
//                             <div class="content">
//                                 ${songName}
//                             </div>
//     `
//     search_results.append(card);
//     card.href="#"+id;
// });

// let input=document.getElementById('first_input');
// input.addEventListener('keyup', ()=>{
//     let input_value=input.value.toUpperCase();
//     console.log(input_value);
//     let items=search_results.getElementsByTagName('a');

//     for(let i=0; i<items.length; i++){
//         let choice=items[i].getElementsByClassName('content')[0];
//         let text_value=choice.textContent || choice.innerHTML;
//         console.log(text_value);

//         if(text_value.toUpperCase().indexOf(input_value)>-1){
//             items[index].style.display="flex";
//             console.log("yes");
//         }
//         else {
//             items[index].style.display="none";
//             console.log("no");
//         }
//     }
// })
