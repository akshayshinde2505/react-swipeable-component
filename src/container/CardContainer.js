import React from 'react'
import CardSwipeComponent from '../components/CardSwipeComponent'

import RatanTataImage from "../assets/RatanTata.jpg";
import JeffBezosImage from "../assets/JeffBezos.jfif";
import BillGatesImage from "../assets/BillGates.jpg";
import MarkZuckerbergImage from "../assets/MarkZuckerberg.jfif";
import OprahWinfreyImage from "../assets/OprahWinfrey.jpg";

class CardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resumeList: [{
                name: 'Ratan Tata',
                designation: 'Indian industrialist, philanthropist, and a former chairman of Tata Sons',
                img: RatanTataImage,
                description: "He was also chairman of Tata Group, from 1990 to 2012, and again, as interim chairman, from October 2016 through February 2017, and continues to head its charitable trusts. He is the recipient of two of the highest civilian awards of India, the Padma Vibhushan (2008) and Padma Bhushan (2000). Born in 1937, he is a scion of the Tata family, and son of Naval Tata who was later adopted by Ratanji Tata, son of Jamsetji Tata, the founder of Tata Group. He is an alumnus of the Cornell University College of Architecture and Harvard Business School through the Advanced Management Program that he completed in 1975. He joined his company in 1961 when he used to work on the shop floor of Tata Steel, and was the apparent successor to J. R. D. Tata upon the latter's retirement in 1991. He got Tata Tea to acquire Tetley, Tata Motors to acquire Jaguar Land Rover, and Tata Steel to acquire Corus, in an attempt to turn Tata from a largely India-centrist group into a global business.",
            }, {
                name: 'Jeff Bezos',
                designation: 'Founder of Amazon which is the largest eCommerce marketplace used by millions of customers worldwide.',
                img: JeffBezosImage,
                description: "The president and CEO of the company. With a net worth of more than $200 billion as of June 2021, he is the richest person in the world according to both Forbes and Bloomberg's Billionaires Index. Born in Albuquerque and raised in Houston and later Miami, Bezos graduated from Princeton University in 1986. He holds a degree in electrical engineering and computer science. He worked on Wall Street in a variety of related fields from 1986 to early 1994. Bezos founded Amazon in late 1994, on a cross-country road trip from New York City to Seattle. The company began as an online bookstore and has since expanded to a wide variety of other e-commerce products and services, including video and audio streaming, cloud computing, and artificial intelligence. It is currently the world's largest online sales company, the largest Internet company by revenue, and the world's largest provider of virtual assistants and cloud infrastructure services through its Amazon Web Services branch.",
            }, {
                name: 'Bill Gates',
                designation: 'Founder of Microsoft foundation, also an American business magnate, investor, author and philanthropist.',
                img: BillGatesImage,
                description: "He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He is considered one of the best known entrepreneurs of the microcomputer revolution of the 1970s and 1980s. Gates was born and raised in Seattle, Washington. In 1975, he and Allen founded Microsoft in Albuquerque, New Mexico. It became the world's largest personal computer software company. Gates led the company as chairman and CEO until stepping down as CEO in January 2000, succeeded by Steve Ballmer, but he remained chairman of the board of directors and became chief software architect. During the late 1990s, he was criticized for his business tactics, which have been considered anti-competitive. This opinion has been upheld by numerous court rulings. In June 2008, Gates transitioned to a part-time role at Microsoft and full-time work at the Bill & Melinda Gates Foundation, the private charitable foundation he and his wife, Melinda Gates, established in 2000. He stepped down as chairman of the board of Microsoft in February 2014 and assumed a new post as technology adviser to support the newly appointed CEO Satya Nadella. In March 2020, Gates left his board positions at Microsoft and Berkshire Hathaway to focus on his philanthropic efforts including climate change, global health and development, and education.",
            }, {
                name: 'Mark Zuckerberg',
                designation: 'Founder of Facebook, also an American technology entrepreneur and philanthropist',
                img: MarkZuckerbergImage,
                description: "He also is a co-founder of the solar sail spacecraft development project Breakthrough Starshot and serves as one of its board members Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004, with college roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes. Originally launched to select college campuses, the site expanded rapidly and eventually beyond colleges, reaching one billion users by 2012. Zuckerberg took the company public in May 2012 with majority shares. In 2007, at age 23, he became the world's youngest self-made billionaire. As of July 2021, Zuckerberg's net worth is $132 billion, making him the 5th-richest person in the world",
            }, {
                name: 'Oprah Winfrey',
                designation: 'Oprah Winfrey is a billionaire philanthropist and an African-American woman who is best known for hosting “The Oprah Winfrey Show”',
                img: OprahWinfreyImage,
                description: "The Oprah Winfrey Show, broadcast from Chicago, which was the highest-rated television program of its kind in history and ran in national syndication for 25 years, from 1986 to 2011. Dubbed the 'Queen of All Media,' she was the richest African American of the 20th century.and North America's first black multi-billionaire, and she has been ranked the greatest Black philanthropist in American history. By 2007, she was sometimes ranked as the most influential woman in the world. Winfrey was born into poverty in rural Mississippi to a single teenage mother and later raised in inner-city Milwaukee. She has stated that she was molested during her childhood and early teens and became pregnant at 14; her son was born prematurely and died in infancy. Winfrey was then sent to live with the man she calls her father, Vernon Winfrey, a barber in Nashville, Tennessee, and landed a job in radio while still in high school. By 19, she was a co-anchor for the local evening news. Winfrey's often emotional, extemporaneous delivery eventually led to her transfer to the daytime talk show arena, and after boosting a third- rated local Chicago talk show to first place, she launched her own production company.",
            },
            ],
            openModal: false,
            currentIndex: 0,
            swipedir: 'none',
            threshold: 120, //required min distance traveled to be considered swipe
            restraint: 100, // maximum distance allowed at the same time in perpendicular direction
            allowedTime: 300, // maximum time allowed to travel that distance
        }
    }

    componentDidMount() {
        document.addEventListener('touchstart', (e) => {
            let obj = e.changedTouches[0];
            this.setState({
                // startX: obj.pageX,
                // startY: obj.pageY,
                startobjX: obj.pageX,
                startobjY: obj.pageY,
                startTime: new Date().getTime(),
                backgroundColor: 'red',
            });
        }, false);

        // document.addEventListener('touchmove', (e) => {
        //     // e.preventDefault()
        //     let obj = e.changedTouches[0];
        //     // set horizontal & vertical dist traveled by finger while in contact with surface
        //     this.setState({
        //         startX: obj.pageX,
        //         startY: obj.pageY,
        //     });
        // }, false);

        document.addEventListener('touchend', (e) => {
            let obj = e.changedTouches[0];
            // get horizontal & vertical dist traveled by finger while in contact with surface
            let distX = obj.pageX - this.state.startobjX;
            let distY = obj.pageY - this.state.startobjY;
            // get time elapsed
            let elapsedTime = new Date().getTime() - this.state.startTime;
            let swipedir = 'none';
            // first condition for awipe met
            if (elapsedTime <= this.state.allowedTime && this.state.resumeList.length > 1) {
                // 2nd condition for horizontal swipe met
                if (Math.abs(distX) >= this.state.threshold && Math.abs(distY) <= this.state.restraint) {
                    // if dist traveled is negative, it indicates left swipe
                    swipedir = (distX < 0) ? 'left' : 'right'
                }
                else if (Math.abs(distY) >= this.state.threshold && Math.abs(distX) <= this.state.restraint) {
                    // 2nd condition for vertical swipe met
                    // if dist traveled is negative, it indicates up swipe
                    swipedir = (distY < 0) ? 'up' : 'down'
                }
            }

            this.setState({
                backgroundColor: 'yellow',
                swipedir: swipedir,
            });

            setTimeout(() => {
                if (this.state.swipedir === 'right' || this.state.swipedir === 'left') {
                    let count = this.state.currentIndex;
                    let temp = this.state.resumeList.length - 1;
                    let index = this.state.swipedir === 'left' ? (temp > count ? count + 1 : 0) : (count === 0 ? temp : count - 1)
                    this.setState({
                        swipedir: 'none',
                        startX: undefined,
                        startY: undefined,
                        currentIndex: index,
                    });
                }
            }, 400);
        }, false);
    }

    setModal = (flag) => {
        this.setState({
            openModal: flag,
        })
    }

    render() {
        return (
            <CardSwipeComponent
                {...this.state}
                setModal={this.setModal}
            />
        )
    }
}

export default (CardContainer);