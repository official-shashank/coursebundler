import React, { useState } from 'react'
import {Box, Grid, Heading, Text, VStack} from '@chakra-ui/react'
import intro from '../../Assets/videos/intro.mp4';

const lectures=[
  {
    _id:"shdkhkd",
    title:"sample",
    description:"sample image is video and can not be deleted ",
    video:{
      url:"sadsad"
    },
  },    
  {
    _id:"shdkhkd",
    title:"sample2",
    description:"sample image is video and can not be deleted ",
    video:{
      url:"sadsad"
    },
  },    
  {
    _id:"shdkhkd",
    title:"sample3",
    description:"sample image is video and can not be deleted ",
    video:{
      url:"sadsad"
    },
  },    
  {
    _id:"shdkhkd",
    title:"sample4",
    description:"sample image is video and can not be deleted ",
    video:{
      url:"sadsad"
    },
  },    
  {
    _id:"shdkhkd",
    title:"sample5",
    description:"sample image is video and can not be deleted ",
    video:{
      url:"sadsad"
    },
  },    
  {
    _id:"shdkhkd",
    title:"sample6",
    description:"sample image is video and can not be deleted ",
    video:{
      url:"sadsad"
    },
  },    
]



const CourseDetail = () => {

  const [LectureNumer,setLectureNumber]=useState(0);
  return (
<Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}> 
<Box>
<video

controls controlsList='nodownload noremoteplayback'
disablePictureInPicture
disableRemotePlayback
src={intro}
width={"100%"}
>
</video>
<Heading m={4} children={`#${LectureNumer+1} ${lectures[LectureNumer].title}`}/>
<Heading m={4} children="Description" />

<Text m={"4"} >
{lectures[LectureNumer].description}
</Text>



</Box>
<VStack>
{
  lectures.map((element,index)=>(
   <button key={element._id} onClick={()=>setLectureNumber(index)}
   style={{
    width:"100%",
    padding:"1rem",
    textAlign:"center",
    margin:0,
    borderBottom:"1px solid rgba(0,0,0,0.2)"
   }}
   >
   <Text noOfLines={1}>
   #{index+1} {element.title}
   
   </Text>
   </button>

  ))
}

</VStack>


</Grid>




  )
}

export default CourseDetail