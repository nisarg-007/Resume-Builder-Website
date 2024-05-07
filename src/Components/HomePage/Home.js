import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {templateImagesPaths} from '../Data/Data'//templateImagesPaths is imported from Data.js which is used to display static images of various templates on the Home page.
import { useDispatch } from 'react-redux'
import {updateState} from '../../ReduxManager/dataStoreSlice'
import './home.css';
import YouTube from 'react-youtube';
import Footer from '../Footer/Footer'
const shortid= require('shortid')
//this Home component is rendering various resume templates on to the screen and the user can select either of them and proceed further. 
function Home() {
    const videoId = 'c0qRfChAN0s';
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')//this state is used to display 'useTemplate' button when user hovers over the template
    
    const dispatch = useDispatch();
    return (

        <div>
        <h2 style={{padding:'5px',textAlign:'center',fontFamily:'fantasy',fontSize:'34px'}}>Create your resume in just 10 minutes</h2>
<div className='parent'>
    
    <div className='left'>
        <img src="rlist.jpg" alt="" />
    </div>
    <div className='right'>
    <p>Transforming your career narrative into a captivating resume is our expertise. With our intuitive interface and diverse array of customizable templates, creating a professional resume that reflects your unique journey has never been simpler. Whether you're a seasoned industry veteran or a fresh graduate eager to make your mark, our platform empowers you to craft a compelling narrative that resonates with employers.</p>
<p>Our platform goes beyond mere formatting—it's a comprehensive toolkit designed to elevate your job application process. From dynamic design options to targeted content suggestions, we provide the resources you need to stand out in today's competitive job market. With our real-time collaboration features, you can seamlessly collaborate with peers, mentors, or industry professionals to refine your resume to perfection.</p>


    </div>
</div>



        <div style={{minWidth:'300px'}}>
    
            <div className='d-flex justify-content-center mt-5' >
                
            <h2 style={{textAlign:'center',fontFamily:'fantasy',fontSize:'34px'}}>Select A Template To Get Started</h2>
            </div>
           

            <div className='container' style={{color:'#1f4287',}}>

                <div className='row'>
                    {templateImagesPaths.map((currentTemplate)=>{
                            return(
                                <div className='col col-lg-3 col-md-6  col-12 mt-5' key={shortid.generate()}>
                                    <div 
                                        style= {{ position:'relative'}}
                                        onMouseOver= {()=>{
                                            //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                                            setIsMouseOver(currentTemplate.name)
                                        }}
                                        onMouseOut= {()=>{
                                            //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                                            setIsMouseOver('MouseIsNotOver')
                                        }}
                                    >
                                    <div className='w-100 d-flex justify-content-center'><h3>{currentTemplate.name}</h3></div>
                                    <img className="w-100 image-aspect-ratio" src={currentTemplate.imageSource} alt='template'/>
                                    {isMouseOver === currentTemplate.name           //this conditional rendering is showing 'useTemplate' button when isMouseOver === currentTemplate.name //
                                        ?<Link to="/detailsfillingpage/personalinfo">
                                            <button className='btn btn-primary'
                                                    style={{position: 'absolute',top:'50%' , right:'30%',}}
                                                    onClick= {()=>{
                                                        dispatch(updateState({  //this dispatch function is used to update value of 'selectedTemplate' with the targetedTemplate in dataStoreSlice.js//
                                                        key: 'selectedTemplate',
                                                        value:currentTemplate.name
                                                        }))
                                                    }}
                                            >
                                            Use Template
                                            </button>
                                        </Link>
                                        :null
                                    }
                                </div>
                                </div>
                                
                            )
                        })}
                </div>
            </div>
            
            
        </div>

    <div className='Youtube'>
    <div className='Youtubeleft'>
        <YouTube videoId={videoId} opts={{ width: '700', height: '400' }}/>
    </div>
    <div className='Paragraphright'>
        <p>
            Explore our comprehensive video tutorial for a hands-on learning experience. Dive deep into the intricacies of our platform as we guide you through each step with clarity and precision. From mastering advanced features to optimizing your workflow, our video offers invaluable insights to propel your journey towards success. Join us on this immersive learning adventure and unlock the full potential of our platform today!
        </p>
    </div>
    </div>


    <div>

        <Footer/>
    </div>
    </div>
    )
}

export default Home
