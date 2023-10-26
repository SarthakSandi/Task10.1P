import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ArticleCard = (props) => {
  return (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
        <Card.Meta>Author: {props.author}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
