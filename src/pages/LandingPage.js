import { Box, Flex, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import ContainerPosts from '../components/ContainerPosts';
import CaptionCarousel from '../components/carousel/Carousel';
import { getLatest } from '../api/BlogApi';
import Page from '../components/Page';

function LandingPage({
  postList,
  fetchPopular,
  currentCategory,
  setCurrentCategory,
  page,
  setPage,
  resetPage,
}) {
  const [latestList, setLatestList] = useState([]);
  const [currentSortPop, setCurrentSortPop] = useState('DESC');

  async function fetchLatest(prop) {
    const data = await getLatest(prop);
    setLatestList(data);
  }

  async function onChangeCategory(category) {
    setCurrentCategory(category);
    await fetchLatest({ categoryId: category.id > 0 ? category.id : '' });
    const dataPop = await fetchPopular({
      categoryId: category.id > 0 ? category.id : '',
    });
    setCurrentSortPop('DESC');
    resetPage(dataPop.page);
  }

  function onSortPop() {
    const sortType = document.getElementById('sort-popular').value;
    setCurrentSortPop(sortType);
    fetchPopular({ sortType });
  }

  async function changePage(curPage) {
    const data = await fetchPopular({ page: curPage });
    setPage({ current: curPage, last: data.page });
  }

  useEffect(() => {
    fetchLatest({});
  }, []);

  return (
    <Flex direction={'row'} w={'full'}>
      <Flex direction={'column'} w={'calc(100% - 16rem)'} gap={5} py={5}>
        <Flex direction={'row'} px={5} alignItems={'center'} gap={2}>
          <Box bgColor={'#000000'} w={2} h={'px'} flexWrap={'wrap'} />
          <Text fontSize={'1.5rem'}>Latest</Text>
          <Box bgColor={'#000000'} flexGrow={1} h={'px'} flexWrap={'wrap'} />
        </Flex>
        <CaptionCarousel latestList={latestList} />

        <Flex direction={'row'} px={5} alignItems={'center'} gap={2}>
          <Box bgColor={'#000000'} w={2} h={'px'} flexWrap={'wrap'} />
          <Text fontSize={'1.5rem'}>Most Popular</Text>
          <Box bgColor={'#000000'} flexGrow={1} h={'px'} flexWrap={'wrap'} />
          <Select
            id="sort-popular"
            h={'2rem'}
            w={'5rem'}
            variant={'outline'}
            fontSize={'sm'}
            onChange={onSortPop}
            value={currentSortPop}
          >
            <option value={'DESC'}>Z-A</option>
            <option value={'ASC'}>A-Z</option>
          </Select>
        </Flex>
        <ContainerPosts postList={postList} />

        <Page page={page} changePage={changePage} />
      </Flex>
      <CategorySidebar onChangeCategory={onChangeCategory} />
    </Flex>
  );
}

export default LandingPage;