import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ContainerMain from './details/ContainerMain';

const articleDummy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
`; 

function TabContents() {
  return (
    <Tabs isFitted variant={'enclosed-colored'}>
      <TabList pos={"sticky"} top={"4rem"} w={"full"}>
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel py={"0px"}><ContainerMain/></TabPanel>
        <TabPanel py={"0px"}>2.{articleDummy}</TabPanel>
        <TabPanel py={"0px"}>3.{articleDummy}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabContents;
