import {React,useEffect,useState, useRef} from 'react'
import { Container,Box,Typography } from '@mui/material'
import AnimatedButton from './AnimatedButton'





const Portfolio = () => {
  const data = [  
   {    
      title: "New-Age Digital Assets" ,

      description: "A range of secured digital assets carrying the properties and value of their underlying physical assets. Unify, manage and grow your portfolio with ease." ,

      content:'/images/digital-assets.webp'  
    },

    { 
      title:"World's First Financial NFTs",

      description: "NFTs that double as future-proof financial assets with<br/>added value. Available exclusively on the Vise Marketplace.",

      content:'/images/Financial-FNTs.webp'
    },

    {     
      title:'Vise QuantiFi', 

      description: "Founder's Desk that quantifies real-time production<br/>outputs, realized gains and daily rewards." ,     
      
      content:'/images/Meta-Real.webp'
      
     },
    
   ]

   const imageRefs = useRef([]);
   const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const index = imageRefs.current.indexOf(target);
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    },
    {
      rootMargin:'0px',
      threshold:0.7,
    }
  );

    imageRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      imageRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);


  return (
    <Container disableGutters sx={{bgcolor:'#11141c',padding:'0px 50.625px'}}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'48px'}}>

            <Typography variant='p' sx={{color:'#FFFFFFCC',textAlign:'center', fontSize:'3rem', fontFamily:'Opensaucesans,sans-serif'}}>
                Asset Digitization | Capital Preservation<br/>
                | Portfolio Diversification
            </Typography>

            <AnimatedButton/>
              
            <Typography variant='p' sx={{color:'#FFFFFF80', fontSize:'1rem', fontFamily:'Inter, sans-serif', fontWeight:'300',textAlign:'center',padding:'0px 50.625px',lineHeight:'1.5',paddingBottom:'80px'}}>
                Asset digitization is the future of wealth-tech where we create digital equivalents of real-world<br/> physical or financial assets. With these new-age assets, our ecosystem caters to preserving,<br/> augmenting and diversifying your wealth.
            </Typography>
        </Box>

        <Box sx={{display:{xs:'none', md:'grid',gridAutoColumns:'1fr',gridColumnGap:'3rem',gridRowGap:'3rem',gridTemplateColumns:'1fr 1.25fr',gridTemplateRows:'auto',paddingTop:'120px'}}}>

          <Box sx={{position:'sticky',top:'65px',display:'grid',gridColumnStart:'span 1',gridColumnEnd:'span 1',gridRowStart:'span 1',gridRowEnd:'span 1',alignSelf:'start'}}>

            <Box sx={{display:'flex',gap:'48px',alignItems:'center',paddingBottom:'1rem'}}>

            <Box sx={{bgcolor:'#d6b473',width:'0.5rem',height:'0.5rem',borderRadius:'50%'}}></Box>
            <Typography variant='p' sx={{color:'#A4A9B6CC',fontFamily:"'Space Mono',sans-serif",fontSize:'1rem',lineHeight:'1.5'}}>Experience the best</Typography>

            </Box>

        <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
        {data.map((item,index)=>(
          <Box key={index} sx={{display:'flex',flexDirection:'column',height:'14rem',gap:'12px',filter: `brightness(${index === activeIndex ? 1 : 0.5})`,transition:'filter 0.3s ease'}}>
            <Typography variant='p' sx={{color:'white',fontFamily:'Opensaucesans,sans-serif',fontSize:'2rem',fontWeight:'500'}}>
                    {item.title}
                </Typography>

                <Typography variant='p' sx={{color:'#FFFFFF80',fontSize:'1rem',fontWeight:'300',lineHeight:'1.5',fontFamily:'Inter,sans-serif'}}>
                  {item.description}
                </Typography>
          </Box>
        ))}
      </Box>
            
          </Box> 

           <Box >
          <Box sx={{display:'grid',gridColumnStart:'span 1',gridColumnEnd:'span 1',gridRowStart:'span 1',gridRowEnd:'span 1',gridRowGap:'50vh',alignSelf:'center',paddingTop:'90px'}}>
            {data.map((item,index)=>(
              <Box key={index}  ref={(el) => (imageRefs.current[index] = el)} sx={{display:'flex',justifydescription:'center',alignItems:'center',height:'24rem'}}>
                <img src={item.content} alt='portfolio' style={{width:'357.7px',height:'292.67px',objectFit:'cover'}}/>
                </Box>
            ))}
          </Box>
            
          </Box>
          
        </Box>
        <Box sx={{display:{md:'none',xs:'flex',flexDirection:'column',gap:'8px'}}}>

        <Box sx={{display:'flex',gap:'48px',alignItems:'center',paddingBottom:'3rem'}}>

        <Box sx={{bgcolor:'#d6b473',width:'0.5rem',height:'0.5rem',borderRadius:'50%'}}></Box>
        <Typography variant='p' sx={{color:'#A4A9B6CC',fontFamily:"'Space Mono',sans-serif",fontSize:'1rem',lineHeight:'1.5'}}>Experience the best</Typography>

        </Box>



        <Box sx={{display:'flex',flexDirection:'column',gap:'48px'}}>
            {data.map((item,index)=>(
            <Box key={index} sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
                <Typography variant='p' sx={{color:'white',fontFamily:'Opensaucesans,sans-serif',fontSize:'2rem',fontWeight:'500'}}>
                    {item.title}
                </Typography>

                <Typography variant='p' sx={{color:'#FFFFFF80',fontSize:'1rem',fontWeight:'300',lineHeight:'1.5',fontFamily:'Inter,sans-serif'}}>
                  {item.description}
                </Typography>

                <img src={item.content} alt="portfolio_content" sx={{width:'400px',height:'488.89px',m:'32px 0px'}} />
            </Box>
        
        
        ))}
            </Box>


        </Box>
      
    </Container>
  )
}

export default Portfolio
