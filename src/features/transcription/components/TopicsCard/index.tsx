import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

type Props = {
  topics: string[];
};

const TopicsCard: React.FC<Props> = ({ topics }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h6">Real-time Topics</Typography>
      <List>
        {topics.map((topic) => (
          <ListItem key={topic}>{topic}</ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default TopicsCard;
