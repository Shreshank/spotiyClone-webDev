var currentSong = new Audio()
let i = 0;

// const library = {
//     "Angry_(mood)": { title: "Angry Mood", description: "Calm your Anger", songs: ["01 Dilbar - Satyameva Jayate.mp3", "02 Akh Lad Jave - Loveratri.mp3", "02 Hawa Hawa - Mubarakan (Mika) 320Kbps.mp3", "04 Proper Patola - Namaste England.mp3", "05 Main Tera Boyfriend - Raabta (Arijit Singh) 190Kbps.mp3", "Airlift - Dil Cheez Tujhe Dedi.mp3", "Akhiyaan Milavanga - Arijit Singh.mp3", "Ankhiyon Se Goli Mare - Pati Patni Aur Woh.mp3"] },
//     "Bright_(mood)": { title: "Bright Songs", description: "Bright Songs for you", songs: ["Bad Boy - Saaho Hindi.mp3", "Bheegi Bheegi - Neha Kakkar.mp3", "Bijli Ki Taar - Tony Kakkar.mp3", "Booty Shake_192(PagalWorld.com.se).mp3", "Care Ni Karda - Yo Yo Honey Singh.mp3", "Ceti Mar_320(PagalWorld.com.se).mp3", "Chandigarh Mein - Good Newwz.mp3", "Chhor Denge_192(PagalWorld.com.se).mp3"] },
//     "Chill_(mood)": { title: "Just Chill", description: "Yes, Just Chill", songs: ["Chocolate - Tony Kakkar Riyaz.mp3", "Coca Cola - Luka Chuppi.mp3", "Dheeme Dheeme - Pati Patni Aur Woh.mp3", "Duniyaa - Luka Chuppi.mp3", "Dus Bahane 2 - Baaghi 3.mp3", "Gali Gali - KGF.mp3", "Garmi - Street Dancer 3D.mp3", "Genda Phool - Badshah.mp3"] },
//     "cs": { title: "Copyright Songs", description: "Cover Songs for you", songs: ["Ghungroo - War.mp3", "Goa Beach - Neha Kakkar.mp3", "Hauli Hauli - De De Pyaar De.mp3", "Haye Ni Meri Moto - Superhit Tiktok Song.mp3", "Heelein Toot Gayi_320(PagalWorld.com.se).mp3", "Hello Ji - Kanika Kapoor.mp3", "Hui Malang - Malang.mp3"] },
//     "Dark_(mood)": { title: "Dark Horse", description: "Dark Songs for you", songs: ["Illegal Weapon 2 - Street Dancer 3D.mp3", "Ishq Ka Raja - Addy Nagar.mp3", "Jab Teri Yaad Aayegi - I Shoj Kytrak.mp3", "Jhalak Dikhla Jaa Reloaded - The Body.mp3", "Junooniyat - Mujhko Barsaat Bana Lo.mp3", "Kamaal - Badshah.mp3", "Kamariya Hila Rahi Hai - Pawan Singh.mp3", "Koka - Khandaani Shafakhana.mp3"] },
//     "Diljit": { title: "Diljit Dosanjh", description: "Diljit Dosanjh hits", songs: ["Kya Baat Ay - Harrdy Sandhu.mp3", "Laal Chunariya - Akull.mp3", "Lagdi Lahore Di - Street Dancer 3D.mp3", "Laila -Tony Kakkar.mp3", "Lamborghini - Jai Mummy Di.mp3", "Loca - Yo Yo Honey Singh.mp3", "Move - Raftaar.mp3", "Mumbai Dilli Di Kudiyaan - SOTY2.mp3"] },
//     "Funky_(mood)": { title: "Go Funky", description: "Lets go Funky", songs: ["Mummy Nu Pasand - Jai Mummy Di.mp3", "Mungda - Total Dhamaal.mp3", "Munna Badnaam Hua - Dabangg 3.mp3", "Muqabla - Street Dancer 3D.mp3", "Naach Meri Rani - Guru Randhawa.mp3", "Naah Goriye - Bala.mp3", "Nachi Nachi - Street Dancer 3D.mp3", "Nadiyon Paar_320(PagalWorld.com.se).mp3"] },
//     "karanAujla": { title: "Karan Aujla", description: "Karan Aujla for you", songs: ["Nazar Lag Jayegi - Millind Gaba 190Kbps.mp3", "Nehu Da Vyah - Neha Kakkar.mp3", "O Saki Saki - Batla House.mp3", "Odhani - Made in China.mp3", "Paani Paani_320(PagalWorld.com.se).mp3", "Pachtaoge - Atif Aslam.mp3", "Pal Pal Dil Ke Paas - Arijit Singh.mp3"] },
//     "Love_(mood)": { title: "I Love You", description: "Love is in the air", songs: ["Pallo Latke - Shaadi Mein Zaroor Aana.mp3", "Phir Na Milen Kabhi - Malang.mp3", "Poster Lagwa Do - Luka Chuppi.mp3", "Psycho Saiyaan - Saaho - Hindi.mp3", "Radhe Radhe - Dream Girl.mp3", "Saiyaan Ji - Yo Yo Honey Singh.mp3", "Sakhiyan 2 - Bell Bottom.mp3", "Sauda Khara Khara - Good Newwz.mp3"] },
//     "ncs": { title: "Sleep Songs", description: "Songs for you", songs: ["Serena - Safari.mp3", "She Dont Know - Millind Gaba.mp3", "Shiddat - Akhiyan Udeek Diyan_320(PagalWorld.com.se).mp3", "Shona Shona - Tony Kakkar.mp3", "The Hook Up Song - SOTY 2.mp3", "The Wakhra Song - Judgementall Hai Kya.mp3", "Thodi Jagah - Marjaavaan.mp3", "Title Track_320(PagalWorld.com.se).mp3"] },
//     "Uplifting_(mood)": { title: "Get up", description: "You can do it!", songs: ["Titliaan_320(PagalWorld.com.se).mp3", "Tu Hi Yaar Mera - Pati Patni Aur Woh.mp3", "Tum Hi Aana - Marjaavaan.mp3", "Vaaste - Dhvani Bhanushali.mp3", "Vardaan - CarryMinati.mp3", "Yaad Piya Ki Aane Lagi - Neha Kakkar.mp3", "Yalgaar - Ajey Nagar (Carryminati).mp3"] }
// };

const library = {
    "Angry_(mood)": { title: "Angry Mood", description: "Calm your Anger", songs: [] },
    "Bright_(mood)": { title: "Bright Songs", description: "Bright Songs for you", songs: ["Kya Baat Ay - Harrdy Sandhu.mp3", "Laal Chunariya - Akull.mp3", "Lagdi Lahore Di - Street Dancer 3D.mp3", "Laila -Tony Kakkar.mp3"] },
    "Chill_(mood)": { title: "Just Chill", description: "Yes, Just Chill", songs: [] },
    "cs": { title: "Copyright Songs", description: "Cover Songs for you", songs: [] },
    "Dark_(mood)": { title: "Dark Horse", description: "Dark Songs for you", songs: [] },
    "Diljit": { title: "Diljit Dosanjh", description: "Diljit Dosanjh hits", songs: [] },
    "Funky_(mood)": { title: "Go Funky", description: "Lets go Funky", songs: [] },
    "karanAujla": { title: "Karan Aujla", description: "Karan Aujla for you", songs: [] },
    "Love_(mood)": { title: "I Love You", description: "Love is in the air", songs: [] },
    "ncs": { title: "Sleep Songs", description: "Songs for you", songs: [] }
};

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
    // let a = await fetch(`./songs/${folder}/`);
    // let b = await a.text();
    // let div = document.createElement('div');
    // div.innerHTML = b;
    // let aTag = div.getElementsByTagName('a');
    // let songs = [];
    // for (let index = 0; index < aTag.length; index++) {
    //     if(aTag[index].href.endsWith('.mp3')){
    //         songs.push(aTag[index].href.split(`/songs/${folder}/`)[1]);
    //     }
    // }
    // return songs;

    return library[folder]?.songs || [];
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
    // let a = await fetch(`./songs/${fold}/info.json`)
    // let folde = await a.json();

    const folde = library[fold];
    if (!folde) return false;
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
    // let a = await fetch('./songs/')
    // let response = await a.text();
    // let div = document.createElement("div")
    // div.innerHTML = response;
    // let anchors = div.getElementsByTagName("a");
    // let array = Array.from(anchors);
    // for (let index = 0; index < array.length; index++) {
    //     const e = array[index];
    //     if(e.href.includes("/songs/")){
    //         await CardAlbum(e.href.split("/").slice(-1)[0]);
    //     }


    for (const folder of Object.keys(library)) {
        await CardAlbum(folder);
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
