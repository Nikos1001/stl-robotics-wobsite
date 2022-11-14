import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/Navbar";
import gallery from '../styles/Gallery.module.css'


function GalleryPic(props : {
    imgUrl : string,
    tall? : boolean,
    wide? : boolean
}) { 
    const { tall = false, wide = false } = props;
    return <div className={gallery.image} style={{
        backgroundImage: `url('${props.imgUrl}')`,
        gridRow: tall ? 'span 2 / auto' : '',
        gridColumn: wide ? 'span 2 / auto' : ''
    }}>1</div>;
}

export default function Gallery() {

    return <div>
        <Navbar fade={false}/>
        <div className={gallery.gallery}>
            <GalleryPic imgUrl="https://i.ytimg.com/vi/_t5AYikKvIc/hqdefault.jpg"/> 
            <GalleryPic wide={true} imgUrl="https://m.media-amazon.com/images/M/MV5BNjRlYjUxOGUtMWMwMS00NmRlLThjNmItNGQ1MmM1YTBlODMyXkEyXkFqcGdeQXVyNTE1MDE2MzY@._V1_.jpg"/> 
            <GalleryPic imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk5R3XAAOW8lSnMbjzNQbkA5Vac_AyK6hrQ&usqp=CAU"/> 
            <GalleryPic imgUrl="https://upload.wikimedia.org/wikipedia/ru/thumb/3/3f/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0_%D0%BE_%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D0%BE%D0%BC_%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA%D0%B5%C2%BB_%28%D0%A1%D0%A1%D0%A1%D0%A0%2C_1983%29.jpg/204px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0_%D0%BE_%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D0%BE%D0%BC_%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA%D0%B5%C2%BB_%28%D0%A1%D0%A1%D0%A1%D0%A0%2C_1983%29.jpg"/> 
            <GalleryPic tall={true} imgUrl="https://i0.wp.com/wearecult.rocks/wp-content/uploads/2016/09/Russian-SH.jpg?resize=714%2C538"/> 
            <GalleryPic wide={true} tall={true} imgUrl="https://eofftvreview.files.wordpress.com/2018/03/the-big-space-journey-19752.jpg"/> 
        </div>
    </div>;

}

export { GalleryPic }