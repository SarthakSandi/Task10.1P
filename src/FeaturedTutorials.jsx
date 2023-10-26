import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';
import { faker } from '@faker-js/faker';
import './FeaturedTutorials.css';

const FeaturedTutorials = () => {
  // Generate random featured tutorials with faker
  const featuredTutorials = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    image: faker.image.image(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    username: faker.internet.userName(),
  }));

  return (
    <div className="featured-tutorials-container">
    <Segment>
      <h2>Featured Tutorials</h2>
      <Card.Group>
        {featuredTutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            username={tutorial.username}
          />
        ))}
      </Card.Group>
    </Segment>
    </div>
  );
};

export default FeaturedTutorials;
