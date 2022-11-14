import Navbar from "../components/Navbar";
import contact from '../styles/Contact.module.css';

function Person(props : {
    title : string,
    email : string,
    phoneNumber? : string,
    faceUrl : string,
    socialSecurityNumber? : number
}) {
    const { title, email, phoneNumber = '', faceUrl } = props;
    
    return <div className={contact.person}>
        <div className={contact.personPhoto} style={{
            backgroundImage: `url("${faceUrl}")`
        }}>1</div>
        <div>
            <h1>{title}</h1>
            <p>
                Email: <a href={`mailto:${email}`}>{email}</a><br/>
                {phoneNumber == '' ? '' : `Phone Number: ${phoneNumber}`}
            </p>
        </div>
    </div>;
}

export default function() {

    return <div>
        <Navbar fade={false}/>
        <div className={contact.formContainer}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWJNdLCa2YYXU83lVNhU1SbB2-5zLJ_HjeX6QuQmKnTLcrqw/viewform?embedded=true" width="640" height="400">Loading…</iframe>
        </div>
        <div className={contact.personContainer}>
            <Person
                title='President - Yubo'
                email='yubo@yubo.com'
                phoneNumber='3 141 592 653'
                faceUrl="https://images.computerhistory.org/babbage/5-7-1.jpg"
            />
            <Person
                title='Vice President - Jonathan'
                email='jonathan@teamS.com'
                faceUrl="https://images.adsttc.com/media/images/5ffb/da4b/63c0/17e1/6200/021c/large_jpg/0361_1_fp722449.jpg?1610340923"
            />
            <Person
                title='Vice President - Tian'
                email='tian@tian.com'
                faceUrl="https://ih1.redbubble.net/image.475950724.2535/st,small,507x507-pad,600x600,f8f8f8.u6.jpg"
            />
            <Person
                title='Hardware Education Director - Daniel Alp'
                email='daniel.alp24@ycdsbk12.ca'
                faceUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg"
            />
        </div>
    </div>;
}
