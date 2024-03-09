import React, { useState } from 'react';
import './Courses.css';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  discription,
  lectureCount,
}) => {
  return (
    <VStack className="courses" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={'3'}
        children={title}
        size={'sm'}
      />
      <Text children={discription} noOfLines={'2'} />
      <HStack>
        <Text
          children={'Creator'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>
      <Heading children={`Lectures- ${lectureCount}`}
      size={'xs'}
      textAlign={'center'}
      textTransform={'uppercase'}
      />
      <Heading children={`views- ${views}`}
      size={'xs'}
      textAlign={'center'}
      textTransform={'uppercase'}
      />
      <Stack direction={['column','row']} alignItems={'center'}>
      <Link to={`/courses/${id}`}>
      
      <Button colorScheme='yellow' >Watch Now</Button>
      </Link>
      <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to playlist</Button>
   
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const addToPlaylistHandler=()=>{
    console.log("added to playlist");
  }
  const categories = [
    'Web Development',
    'Data Scientist',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'Data Science',
    'Game Development',
  ];
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  return (
    <Container minHeight={'95vh'} maxW={'container.lg'} padding={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course"
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button minW={'60'} key={index} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Course
          title={'sample'}
          discription={'sample'}
          views={'23'}
          imageSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQCtq0WyNF6iSMkd3RmyJhJZYEapvAIXLaQjf4L-V&s'}
          id={'sample'}
          creator={'sample'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
