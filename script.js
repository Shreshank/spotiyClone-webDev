var currentSong = new Audio()
let i = 0;
async function removeAllEventListeners(element) {
        const events = element.eventListeners;
        if (events) {
            for (const eventType in events) {
                events[eventType].forEach(listener => {
                    element.removeEventListener(eventType, listener);
                });
            }
        }
}

async function cleanUpCode() {

    currentSong.pause();
    resetButton();

    let event = document.querySelector(".songList").getElementsByTagName("li")
    Array.from(event).forEach(async e => {
        const button = e.querySelector(".left-play-button")
        await removeAllEventListeners(button);
    })

    const play = document.getElementById("playpause")
    const prev = document.getElementById("prev")
    const next = document.getElementById("next")
    await removeAllEventListeners(play)
    await removeAllEventListeners(prev)
    await removeAllEventListeners(next)

    await removeAllEventListeners(currentSong);

    const seekbar = document.querySelector(".seekbar")
    await removeAllEventListeners(seekbar)

    const volumeSlider = document.getElementById('volume-slider');
    await removeAllEventListeners(volumeSlider)

    const volumeBar = document.querySelector(".volumeBar").firstElementChild;
    await removeAllEventListeners(volumeBar)
}


async function getSongs(folder) {
    let a = await fetch(`./songs/${folder}/`);
    let b = await a.text();
    let div = document.createElement('div');
    div.innerHTML = b;
    let aTag = div.getElementsByTagName('a');
    let songs = [];
    for (let index = 0; index < aTag.length; index++) {
        if(aTag[index].href.endsWith('.mp3')){
            songs.push(aTag[index].href.split(`/songs/${folder}/`)[1]);
        }
    }
    return songs;
}

async function setSongs(folder){
    // get the list of all the songs
    let songs = await getSongs(folder);

    // show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `<li>
                                <img class="invert" src="./img/music.svg" alt="">
                                <div class="songinfo">
                                    <div class="songname">${song.replaceAll("%20"," ")}</div>
                                    <div class="songartist">Shresh</div>
                                </div>
                                <div class="playnow">
                                    <span>Play Now</span>
                                    <img class="invert left-play-button" src="./img/play.svg" alt="">
                                </div>
                            </li>`;
    }
    await cleanUpCode();
    await playMusic(folder);
}

function resetButton(){
    let reset = document.querySelector(".songList").getElementsByTagName("li");
    Array.from(reset).forEach(e => {
        e.querySelector(".left-play-button").src = playpause.src = "./img/play.svg";
        e.querySelector(".playnow").firstElementChild.innerText = "Play Now";
    })
}

function secToMin(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

function mobileBar(){
    // add a event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-15px";
    })

    // add event to close hamburger
    document.querySelector(".close").addEventListener("click",() => {
        document.querySelector(".left").style.left = "-150%";
    })
}

function playMusic(folder){
    
    // Attach an event to each song(from left)
    i++;
    if(i>=2){window.location.reload();}
    currentSong.src = "";
    let track2 = document.querySelector(".songname").innerHTML
    currentSong.src = `./songs/${folder}/` + track2;
    document.querySelector(".song-name").innerHTML = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
    
    
    let event = document.querySelector(".songList").getElementsByTagName("li")
    Array.from(event).forEach(e => {
        const track = e.querySelector(".songname").innerHTML
        const button = e.querySelector(".left-play-button")
        button.addEventListener("click" , element => {
            let name = `./songs/${folder}/` + track;
            let name2 = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            
            if(name2 === track){
                if(currentSong.paused){
                    currentSong.play();
                    resetButton();
                    button.src = "./img/pause.svg";
                    e.querySelector(".playnow").firstElementChild.innerText = "Pause";
                    playpause.src = "./img/pause.svg";
                }else{
                    currentSong.pause();
                    resetButton();
                    button.src = "./img/play.svg";
                    e.querySelector(".playnow").firstElementChild.innerText = "Play Now";
                    playpause.src = "./img/play.svg";
                }
            }else{
                currentSong.src = name;
                document.querySelector(".song-name").innerHTML = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
                currentSong.play();
                resetButton(); 
                button.src = "./img/pause.svg";
                e.querySelector(".playnow").firstElementChild.innerText = "Pause";
                playpause.src = "./img/pause.svg";
            }
        })
    })
    
    playpause.addEventListener("click", e => {
        let reset = document.querySelector(".songList").getElementsByTagName("li");
        let check = "";
        if(currentSong.paused){
            currentSong.play();
            resetButton();
            playpause.src = "./img/pause.svg";
            check = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll('%20',' ')
            Array.from(reset).forEach(e => {
                let ele = e.querySelector(".songname").innerHTML
                if(ele === check)
                    {
                        e.querySelector(".left-play-button").src = playpause.src = "./img/pause.svg";
                        e.querySelector(".playnow").firstElementChild.innerText = "Pause";  
                    }
                })
            }else{
                currentSong.pause();
                resetButton();
                playpause.src = "./img/play.svg";
                check = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll('%20',' ')
                Array.from(reset).forEach(e => {
                    let ele = e.querySelector(".songname").innerHTML
                    if(ele === check){
                        e.querySelector(".left-play-button").src = playpause.src = "./img/play.svg";
                        e.querySelector(".playnow").firstElementChild.innerText = "Play Now";
                    }
                })
            }
    })
        
    // listen for time update and circle event
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
    currentSong.addEventListener("timeupdate",(e) => {
        document.querySelector(".songtime").innerHTML = `${secToMin(currentSong.currentTime)} / ${secToMin(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })
    
    // Add an event for seekbar
    document.querySelector(".seekbar").addEventListener("click",(e) => {
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent)/100
    })
    
    // change Volume
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', () => {
        currentSong.volume = volumeSlider.value;
        if(currentSong.volume == 0){
            document.querySelector(".volumeBar").firstElementChild.firstElementChild.src = "./img/mute.svg"
        }else{
            document.querySelector(".volumeBar").firstElementChild.firstElementChild.src = "./img/volume.svg"
        }
    });
    document.querySelector(".volumeBar").firstElementChild.addEventListener("click",(e) =>{
        const mute = document.querySelector(".volumeBar").firstElementChild;
        if(mute.firstElementChild.src.split("/img/")[1] == "mute.svg"){
            mute.firstElementChild.src = "./img/volume.svg"
            currentSong.volume = volumeSlider.value = 1; 
        }else{
            mute.firstElementChild.src = "./img/mute.svg"
            currentSong.volume = volumeSlider.value = 0;
        }
    })

    // change Music
    let j = 0;
    let list = document.querySelector(".songList").getElementsByTagName("li")
    prev.addEventListener("click", e => {
        for(let i=0;i<list.length;i++){
            let kj = list[i].querySelector(".songname").innerHTML
            let check2 = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            if(check2 == kj){j = i}
        }
        if(j != 0){
            j--;
            currentSong.src = `./songs/${folder}/` + list[j].querySelector(".songname").innerHTML;
            document.querySelector(".songtime").innerHTML = `${secToMin(currentSong.currentTime)} / ${secToMin(currentSong.duration)}`
            document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
            document.querySelector(".song-name").innerHTML = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            currentSong.play();
            resetButton();
            playpause.src = "./img/pause.svg";
            let check = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            Array.from(list).forEach(e => {
                let ele = e.querySelector(".songname").innerHTML
                if(ele === check)
                    {
                        e.querySelector(".left-play-button").src = playpause.src = "./img/pause.svg";
                        e.querySelector(".playnow").firstElementChild.innerText = "Pause";  
                    }
            })
        }
    })
    next.addEventListener("click", e => {
        for(let i=0;i<list.length;i++){
            let kj = list[i].querySelector(".songname").innerHTML
            let check2 = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            if(check2 == kj){j = i}
        }
        if(j != list.length){
            j++;
            currentSong.src = `./songs/${folder}/` + list[j].querySelector(".songname").innerHTML;
            document.querySelector(".songtime").innerHTML = `${secToMin(currentSong.currentTime)} / ${secToMin(currentSong.duration)}`
            document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"     
            document.querySelector(".song-name").innerHTML = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            currentSong.play();
            resetButton();
            playpause.src = "./img/pause.svg";
            let check = currentSong.src.split(`/songs/${folder}/`)[1].replaceAll("%20"," ");
            Array.from(list).forEach(e => {
                let ele = e.querySelector(".songname").innerHTML
                if(ele === check)
                    {
                        e.querySelector(".left-play-button").src = playpause.src = "./img/pause.svg";
                        e.querySelector(".playnow").firstElementChild.innerText = "Pause";  
                    }
            })
        }
    })

    // alternative soln
    // Add an event listener to previous
    // prev.addEventListener("click", () => {
    //     currentSong.pause()
    //     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    //     if ((index - 1) >= 0) {
    //         playMusic(songs[index - 1])
    //     }
    // })

    // // Add an event listener to next
    // next.addEventListener("click", () => {
    //     currentSong.pause()
    //     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    //     if ((index + 1) < songs.length) {
    //             playMusic(songs[index + 1])
    //         }
    //     })
}   

async function CardAlbum(fold){

    let a = await fetch(`./songs/${fold}/info.json`)
    let folde = await a.json();
    let name = folde.title
    let desc = folde.description
    let cards = document.createElement("div");
    cards.innerHTML = `<div class="cards" data-alpaya="${fold}">
                            <div class="play">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z" stroke="#1C274C" stroke-width="1.5"/>
                                </svg>
                            </div>
                            <img src="./songs/${fold}/cover.jpg" alt="imgae">
                            <h2>${name}</h2>
                            <p>${desc}</p>
                        </div>`;
    
    let cont = document.querySelector(".cardContainer")
    cont.innerHTML = cont.innerHTML + cards.innerHTML;

    return true
}

async function displayAlbums(){
    let a = await fetch('./songs/')
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if(e.href.includes("/songs/")){
            await CardAlbum(e.href.split("/").slice(-1)[0]);
        }
    }

    Array.from(document.getElementsByClassName("cards")).forEach(e => {
        e.addEventListener("click" , async items => {
            let songs = await setSongs(`${items.currentTarget.dataset.alpaya}`)    
        })
    })

}   

(async function main (){
                
    mobileBar();
    displayAlbums();
    
})()