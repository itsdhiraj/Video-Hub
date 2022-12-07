import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = 
{
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  padding:'4',
  size:'3xl'

}


const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW ={'container.xl'}minH={'100vh'} p="16">
        <Heading textTransform={"uppercase"}py="2" w={"fit-content"}borderBottom={"2px solid"} m={'auto'}>Services</Heading>
       <Stack
       h={"full"}
       p={"4"}
       alignItems={"center"}
       direction={['column','row']}


       >
        <Image src={img5} h={["40","400"]}filter={'hue-rotate(-130deg}'} textAlign={"center"}/>
    
         <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}>
         If you want video content that can complement and enhance your business’s marketing strategy, you need video production services that are up to the task. And while Google can give you a solid starting point, it can be hard to determine which one of the many, many alternatives out there is the right fit for your company.

We’d like to give you a hand with that, so we’ve gathered the best video production services for business in one handy list, allowing you to learn a bit about each, and compare what they bring to the table. 

Let’s dive in.  </Text>
       </Stack>
      </Container>

      
      
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
   // interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'}  />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
         Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
         Gaming on console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        night life is cool
      </Heading>
    </Box>
   
  </Carousel>
);

export default Home;
