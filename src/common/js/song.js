export default class Song {
    constructor({ id, mid, singer, name, album, duration, image, url }) {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
}
// 工厂方法
const IMG_PRE_URL = 'https//y.gtimg.cn/music/photo_new/T002R300x300M000'
const SONG_PRE_URL = 'http://ws.stream.qqmusic.qq.com/'
export function createSong(musicData) {
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `${IMG_PRE_URL}${musicData.albummid}.jpg?max_age=2592000`,
        url: `${SONG_PRE_URL}${musicData.songid}.m4a?fromtag=46`
    })
}

function filterSinger(singers) {
    if (!singers) return
    return singers
        .map((singer) => {
            return singer.name
        })
        .join('/')
}