import { Fragment, useState } from 'react';
import '../index.css';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Hero() {

    const [hoverElement, setHoverElement] = useState(null);
    const onHover = (elmnt) => {
        setHoverElement(elmnt);
    }
    const outHover = (event) => {
        setHoverElement(null);
    }

    return (
        <>
            <Nav />
            {/* Head Image */}
            <div className='flex justify-center flex-wrap my-10'>
                <div className='lg:ml-40 mt-10  justify-center ml-20'>
                    <img className='h-3/4  mr-0 lg:hover:animate-pulse' src={require('../images/Abstraction.png')}></img>
                </div>
                <div className='lg:flex-1 lg:mr-20 lg:mt-20 justify-center align-center  px-10'>
                    <img className='' src={require('../images/RECYCLOTRON ROBOTICS CHALLENGE.png')}></img>
                    <p className='mt-10 w-3/4'>Test your taste in technology by designing and making a robot from scrap, and push your limits to make something truly ground breaking.</p>
                    <Link to="/form1"><button className="mt-8 bg-transparent text-blue-700 hover:text-white hover:bg-blue-500 border border-blue-500 hover:border-transparent rounded font-bold py-2 px-4 rounded">Register Now!</button></Link>
                </div>
            </div>



            {/* Chunk */}
            <div className='flex flex-wrap flex-col justify-center align-center lg:px-60 '>
                <div className='m-auto'>
                    <div className='flex flex-wrap justify-center align-center text-4xl font-black mb-10 f'>What is it?</div>
                    <div className='flex flex-wrap justify-center align-center lg:px-40 px-10 text-center'>This event is Robotic Club's first pan India initiative and is expected to attract large crowd of tech savvy minds.The challenge is to design and build a robot that can perform any task while minimizing the environmental impact involved in its designing.</div>
                </div>
            </div>


            {/* Steps */}
            <div className='flex flex-col mt-20 lg:p-20 max-[1220px]:items-center max-[1220px]:space-y-16'>
                <div className='flex flex-wrap flex-row max-[1220px]:flex-col-reverse max-[1220px]:items-center   '>
                    <div className='flex flex-wrap flex-col lg:ml-60'>
                        <div className='flex lg:justify-left flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>1. Understand the Problem</h1></div>
                        <div className='lg:justify-left flex-wrap flex-col w-96 max-[1220px]:w-80 '>The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly. The design should be innovative and cost-effective and use readily available waste materials.</div>
                    </div>
                    <div className='flex lg:justify-right flex-wrap lg:ml-32 max-[1220px]:ml-0'><img className='lg:hover:animate-bounce' src={require('../images/image_99-removebg-preview-removebg-preview.png')}></img></div>
                </div>
                <div className='flex flex-1 flex-wrap flex-row mt-5 max-[1220px]:flex-col max-[1220px]:items-center '>
                    <div className='flex flex-wrap lg:ml-60 max-[1220px]:items-center'><img className='lg:hover:animate-bounce' src={require('../images/image_100-removebg-preview-removebg-preview.png')}></img></div>
                    <div className='flex flex-wrap flex-col lg:ml-20'>
                        <div className='flex lg:justify-right  flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>2. Look out for usefull scrap</h1></div>
                        <div className='flex lg:justify-right flex-wrap flex-col w-96 max-[1220px]:w-80'>In order to make the robot you want, you need to list down the thing your need and starts looking for it around your house. You can buy things like batteries and motors from stores</div>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row mt-5 max-[1220px]:flex-col-reverse max-[1220px]:items-center '>
                    <div className='flex flex-wrap flex-col lg:ml-60'>
                        <div className='flex lg:justify-left flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>3. Build it up !!</h1></div>
                        <div className='lg:justify-left flex-wrap flex-col w-96 max-[1220px]:w-80'>Start thinking on how you will be making the robot with the scraps and useful items you found. A proper working robot model would be your target</div>
                    </div>
                    <div className='flex lg:justify-right flex-wrap lg:ml-32'><img className='lg:hover:animate-bounce' src={require('../images/image_99-removebg-preview-removebg-preview (1).png')}></img></div>
                </div>
                <div className='flex flex-1 flex-wrap flex-row mt-5 max-[1220px]:flex-col max-[1220px]:items-center '>
                    <div className='flex flex-wrap lg:ml-60'><img className='lg:hover:animate-bounce' src={require('../images/image_101-removebg-preview-removebg-preview.png')}></img></div>
                    <div className='flex flex-wrap flex-col lg:ml-20 '>
                        <div className='flex lg:justify-right  flex-wrap flex-col mb-10 text-2xl font-black max-[1220px]:my-2'><h1>4. Submit and win prizes</h1></div>
                        <div className='flex lg:justify-right flex-wrap flex-col w-96 max-[1220px]:w-80'> There are a lot of prizes and exciting things to wins from this competition, so give your best to win this</div>
                    </div>
                </div>
            </div>






            {/* Challenges */}


            <div className='lg:grid mx-0 lg:gap-20 justify-center align-center h-auto challenges flex-wrap lg:grid-cols-2 mt-6'>
                <div className='mb-10 lg:my-60 mx-auto px-10'>
                    <div className='mt-16 lg:text-6xl text-4xl font-black f pb-5'>
                        Several Key Challenges
                    </div>
                    <div className='mt-5'>
                        The robot your will be making must be addressing these challenges.
                        Keeping these factor in mind, lets have a close look into them.The main problem that needs to be addressed in designing a best-out-of-waste project is to create a product that is functional, aesthetically pleasing, and eco-friendly.
                    </div>
                </div>
                <div className='bg-black text-white overflow-y-scroll challenges__scroll overflow-x-clip'>
                    <div className='px-10 py-10'>
                        <img className='mx-10 lg:ml-72 object-contain px-10' src={require('../images/processing 1.png')}></img></div>
                    <div className='mx-24 text-2xl mt-10 font-black'>Material Selection:</div>
                    <div className='mt-5 mx-24'>IIT Guwahati students will be judging your projects. There are a lot   of prizes and exciting things to wins from this competition, so give your best to win this</div>

                    <div className='px-10 py-10'>
                        <img className='mx-10 lg:ml-72 px-10' src={require('../images/logo-design 1.png')}></img></div>
                    <div className='mx-24 text-2xl mt-10 font-black'>Design</div>
                    <div className='mt-5 mx-24'>Developing an innovative design that meets the intended purpose of the product, looks visually appealing, and utilizes the chosen waste materials.</div>

                    <div className='px-10 py-10'>
                        <img className='mx-10 lg:ml-72 px-10' src={require('../images/mechanical 1.png')}></img></div>
                    <div className='mx-24 text-2xl mt-10 font-black'>Functionality</div>
                    <div className='mt-5 mx-24'>Ensuring that the product is functional and serves its intended purpose.</div>

                    <div className='px-10 py-10'>
                        <img className='mx-10 lg:ml-72 px-10' src={require('../images/sustainability 1.png')}></img></div>
                    <div className='mx-24 text-2xl mt-10 font-black'>Sustainability</div>
                    <div className='mt-5 mx-24'>Ensuring the product is eco-friendly and has a minimal environmental impact. This can include reducing waste, using renewable resources, and minimizing the use of harmful chemicals</div>

                    <div className='px-10 py-10'>
                        <img className='mx-10 lg:ml-72 px-10' src={require('../images/budget 1.png')}></img></div>
                    <div className='mx-24 text-2xl mt-10 font-black'>Cost-Effectiveness</div>
                    <div className='mt-5 mx-24 mb-10'>Ensuring that the product is affordable and can be produced cost-effectively.</div>

                </div>
            </div>



            {/* Instruction */}
            <div>
                <div className='flex flex-col justify-center align-center lg:px-60 mt-20 pt-20  flex-wrap mx-auto ' >
                    <div className='flex justify-center align-center text-4xl font-black mb-10 f'>Instructions</div>
                    <div className='px-10'><b>1.Each team should submit a video </b>(Maximum 25 points):
                        <br></br>The video simulation should be 10 minutes long.
                        The video should demonstrate a complete description of the robot and its working.
                        The team members should always be visible in front of the camera.<br></br><br></br>

                        <b>2.Report Submission</b> (Maximum 20 points):
                        <br></br>The report should include a basic idea about model and design details, such as material choice, the calculation (if any), motor and sensor selection.<br></br><br></br>
                        <u>Introduction</u>: Provide an overview of the project, its objectives, and the problem statement being addressed.<br></br><br></br>
                        <u>Design</u>: Describe the design of the project, including the selection of waste materials, the design process, and the final product design.<br></br><br></br>
                        <u>Functionality</u>: Explain how the project is functional and serves its intended purpose effectively.<br></br><br></br>
                        <u>Technical proficiency</u> (maximum 25 points): The project should demonstrate technical proficiency in the selection of materials, construction techniques, and the use of tools and equipment.<br></br><br></br>
                        *The use of motors, sensors, microcontrollers and other electronic equipment is allowed but the idea of utilizing waste should not be overlooked/ignored.<br></br><br></br>

                        <b>3.Use of waste materials</b> (maximum 10 points): The project should effectively utilize waste materials in a creative and eco-friendly way, reducing waste and promoting sustainability.<br></br><br></br>

                        <b>4.Creativity and uniqueness</b> (maximum 20 points): The project should demonstrate creativity and uniqueness using waste materials, design, and functionality.</div>
                </div>
            </div>




            {/* Prizes */}
            <div className='flex flex-col justify-center align-center lg:px-60 mt-20 pt-20 flex-wrap mx-auto'>
                <div className='flex justify-center align-center text-4xl font-black mb-10 f'>Prizes and Rewards</div>

                {/* <div className='flex mx-auto flex-wrap justify-center align-center gap-2 mb-10 mx-auto  max-w-7xl md:grid md:-cols-3 lg:grid gap-2 lg:grid-cols-3'>
                    <div className='bg-gradient-to-r from-blue-500 to-blue-200 grid col-span-1  rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 h-100'>
                        <div className='text-2xl '>1st Prize</div>
                        <div><img className='my-4 max-w-md h-80 w-80' src={require('../images/image 95.png')}></img></div>
                        <div>The winner of the competition will be awarded with a macbook</div>
                    </div>
                    <div className='bg-gradient-to-r from-blue-200 to-green-200 grid col-span-1  rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 h-100'>
                        <div className='text-2xl '>2nd Prize</div>
                        <div className=''><img className='my-4 max-w-md h-80 w-72 px-10 opacity-80' src={require("../images/image-removebg-preview (2).png")}></img></div>
                        <div>Opportunity to win Samsung Watch 5 for the 2nd winner</div>
                    </div>
                    <div className='bg-gradient-to-r from-green-200 to-green-500 grid col-span-1  rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 h-100'>
                        <div className='text-2xl '>3rd Prize</div>
                        <div><img className='my-4 max-w-md h-80 w-80 py-10 px-4 opacity-60' src={require("../images/image 103.png")}></img></div>
                        <div>Have a chance to get win Alexa dot</div>
                    </div>
                </div> */}
                {/* opacity-50 hover:opacity-100 */}
                <div className='lg:mx-auto mx-16 max-w-7xl md:grid md:-cols-4 lg:grid gap-4 lg:grid-cols-4 '>
                    <div onMouseEnter={() => onHover('prize__1')} onMouseLeave={outHover} className={`transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-blue-500 to-blue-400 flex flex-col  rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 h-100 ${(hoverElement !== 'prize__1') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'} `}>
                        <div className='text-2xl mb-2'>1st Prize</div>
                        <div className='text-2xl'>Worth 100K</div>
                        <div><img className='my-2' src={require('../images/image 95.png')}></img></div>
                        <div>The winner of the competition will be awarded with a macbook</div>
                        
                    </div>
                    <div className='md:grid md:col-span-3 md:row-2 lg:grid lg:col-span-3 lg:row-2 '>
                        <div className='md:grid md:grid-cols-4 lg:grid lg:grid-cols-3 gap-4'>
                            <div onMouseEnter={() => onHover('prize__2')} onMouseLeave={() => setHoverElement(null)} className={`transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-blue-400 to-blue-300 justify-center align-center rounded-2xl border border-slate-200 hover:shadow-2xl  py-4 px-3 ${(hoverElement !== 'prize__2') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'} `}>
                                <div className='text-2xl'>2nd Prize</div>
                                <div className='text-2xl'>Worth 31K</div>
                                <div className=''><img className='my-2 mx-auto max-w-md h-40 w-40 px-4 opacity-80 object-contain' src={require("../images/image-removebg-preview (2).png")}></img></div>
                                <div>Opportunity to win Samsung Watch 5 for the 2nd winner</div>
                            </div>
                            <div onMouseEnter={() => onHover('prize__3')} onMouseLeave={() => setHoverElement(null)} className={`flex flex-wrap transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-blue-300 to-green-300 col-span-1 rounded-2xl border border-slate-200 hover:shadow-lg  py-4 px-3 ${(hoverElement !== 'prize__3') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'}`}>
                                <div className='text-2xl mb-4'>3rd Prize <br />Worth 5K</div>
                                <div><img className='my-0  py-4 px-2 opacity-60' src={require("../images/image 103.png")}></img></div>
                                <div>Have a chance to win Alexa dot</div>
                            </div>
                            <div onMouseEnter={() => onHover('prize__4')} onMouseLeave={() => setHoverElement(null)} className={`transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-green-300 to-green-500 justify-center align-center rounded-2xl border border-slate-200 hover:shadow-2xl  py-4 px-3 ${(hoverElement !== 'prize__4') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'}`}>
                                <div className='text-2xl mb-4'>Participant</div>
                                <div>
                                    <ul>
                                        <li>&bull; Participation certificates from iitg robotics club.</li>
                                        <li>&bull; Free bootcamp course of robotics club worth 200 Rs.</li>
                                        <li>&bull; Commercial Grade License from ALTAIR.</li>
                                        <li>&bull; Fee 3 month subscription of THE HINDU e-paper worth 249/month.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=' md:grid md:grid-cols-2 md:col-span-3 lg:grid lg:grid-cols-2 lg:col-span-3 gap-4 mt-4'>
                            <div onMouseEnter={() => onHover('prize__5')} onMouseLeave={() => setHoverElement(null)} className={`transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-blue-400 to-green-300 justify-center align-center rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 ${(hoverElement !== 'prize__5') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'}`}>
                                <div className='text-2xl mb-4'>Top 10 Teams</div>
                                <div>Get a chance to visit Robotics club IITG</div>
                            </div>
                            <div onMouseEnter={() => onHover('prize__6')} onMouseLeave={() => setHoverElement(null)} className={`transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-green-300 to-green-500 justify-center align-center rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 ${(hoverElement !== 'prize__6') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'}`}>

                                <div className='text-2xl mb-4'>Top 10% teams</div>
                                <div>Will be featured on our social media channels</div>

                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => onHover('prize__7')} onMouseLeave={() => setHoverElement(null)} className={`lg:col-span-4 md:col-span-3 transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-blue-400 to-green-300 justify-center align-center rounded-2xl border border-slate-200 hover:shadow-2xl py-4 px-3 ${(hoverElement !== 'prize__7') && (hoverElement !== null) ? 'opacity-50' : 'opacity-100'}`}>
                        <div className='text-2xl mb-4'>Benefits for the school</div>
                        <div>
                            <ul>
                                <li>&bull; The winning school from each state will be featured on our Instagram, LinkedIn, and Facebook pages, which have a combined reach of 10,000 followers and is continually growing.</li>
                                <li>&bull; The school with the highest participation from each city will be declared as our city partner for the following year. As a partner, they will receive perks such as free branding on our problem statement and invitations . Additionally, students from that school will receive free registration for the next year.</li>
                                <li>&bull; Schools with participation of more than 20 teams will certificate from the IITG Robotics Club.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            {/* Sponsor */}
            <div className=''>
                <div>
                    <div className='flex justify-center align-center text-2xl font-black my-20 '>Our Sponsors</div>
                    {/* <div className='flex justify-center align-center mb-10 text-center'>(Maximum 25 points):<br></br>
                        The video simulation should be 10 minutes long.
                    </div> */}
                </div>
                <div className='flex mx-20 flex-wrap justify-center align-center  gap-20 mx-auto mb-20'>
                    <div><img className='max-w-xs w-64 h-24 object-contain' src={require('../images/Altair_Brandmark_Hz_RGB_FullColor.jpg')}></img></div>
                    <div><img className='max-w-xs w-40 h-24 object-contain' src={require('../images/WhatsApp Image 2023-05-20 at 17.09.00.jpeg')}></img></div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Hero;