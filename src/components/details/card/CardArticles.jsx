import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

function onLike() {
  alert('Like');
}

function onBookmark() {
  alert('Bookmark');
}

function CardArticles({ articles }) {
  return articles.map(item => {
    return (
      <Flex
        // Container
        direction={'column'}
        bgColor={'card'}
        borderRadius={'8px'}
        overflow={'hidden'}
        boxShadow={'md'}
        transition={'.2s'}
        _hover={{
          transform: 'translate(0, -0.65rem)',
          transition: '.3s',
        }}
      >
        <Box
          // Upper Menu
          pos={'relative'}
        >
          <Box
            w={'full'}
            h={'40%'}
            pos={'absolute'}
            top={0}
            bgGradient={'linear-gradient(to-b, #000000DF, #00000000)'}
          >
            <Flex
              direction={'column'}
              pos={'absolute'}
              top={'0.5rem'}
              right={'0.5rem'}
              fontSize={'xl'}
              color={'primaryTextIcon'}
              alignItems={'end'}
              gap={1}
            >
              <Flex gap={1}>
                <Text color={'primaryTextIcon'} fontSize={'md'}>
                  {item.likes}
                </Text>
                <AiFillLike onClick={onLike} cursor={'pointer'} />
              </Flex>
              <BsFillBookmarkPlusFill onClick={onBookmark} cursor={'pointer'} />
            </Flex>
          </Box>

          <Flex
            // Bottom Menu
            w={'full'}
            h={'40%'}
            pos={'absolute'}
            bottom={0}
            bgGradient={'linear-gradient(to-t, #000000DF, #00000000)'}
            alignItems={'end'}
            justifyContent={'center'}
            py={'1.1rem'}
          >
            <Text
              color={'primaryTextIcon'}
              fontSize={'xl'}
              fontWeight={'semibold'}
              fontFamily={'Fira Code'}
              noOfLines={2}
              textAlign={'center'}
            >
              {item?.title}
            </Text>
          </Flex>

          <Image
            // Image Content
            w={'full'}
            h={'32vh'}
            alt="Image Error"
            src={`https://minpro-blog.purwadhikabootcamp.com/${item?.imageURL}`}
            objectFit={'cover'}
            objectPosition={'center'}
          />
        </Box>

        <Text
          // lines of content
          px={'20px'}
          py={'1px'}
          h={'6rem'}
          noOfLines={3}
          textAlign={'justify'}
          fontSize={'md'}
        >
          {item?.content}
        </Text>
      </Flex>
    );
  });
}

export default CardArticles;
