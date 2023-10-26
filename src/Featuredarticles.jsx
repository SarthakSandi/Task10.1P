// src/components/FeaturedArticles.js
import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';
import { faker } from '@faker-js/faker';
import './Featuredarticles.css';

const Featuredarticles = () => {
  // Generate random featured articles with faker
  return (
    <div className="featured-articles-container">
    <Segment>
      <h2>Featured Articles</h2>
      <Card.Group>
        {[...Array(3)].map(() => (
          <ArticleCard
            image={faker.image.avatar()}
            title={faker.person.zodiacSign()}
            description={faker.lorem.paragraph()}
            author={faker.person.fullName()}
          />
        ))}
      </Card.Group>
    </Segment>
  </div>
  );
};

export default Featuredarticles;