const songs = [
    "↑人生ゲーム↓/ゆずひこ",
    "1/6 -out of the gravity-/ぼーかりお",
    "1/6/ぼーかりおどP",
    // 將您的歌單加入這裡
];

function selectRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    document.getElementById("song-result").textContent = `選ばれた曲は: ${selectedSong}です`;
}
