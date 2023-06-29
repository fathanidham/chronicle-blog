import { Grid } from '@chakra-ui/react';
import CardArticles from './details/card/CardArticles';

function ContainerPosts({postList}) {
  return (
    <Grid p={3} gap={3} templateColumns={'repeat(3, 1fr)'}>
      <CardArticles articles={postList} />
    </Grid>
  );
}

export default ContainerPosts;
