import React, { Component } from 'react';
import { connect } from "react-redux";
import fetchArticles from './articleActions';
import {
  Button,
  Container,
  Icon,
  Segment,
  Card,
  Header,
    Image
} from 'semantic-ui-react';

class Layout extends Component {
  componentWillMount() {
      this.props.dispatch(fetchArticles())
  }
  render() {
    return (
        <section>
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container text>
              <Header
                as='h1'
                content='Live Headlines'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Read whatever you want, whenever you want to'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <a href="#articles"><Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button></a>
            </Container>
          </Segment>
            <Container>
            <Segment loading={this.props.userFetched} textAlign='left'
            style={{ padding: '1em 0em', margin: '1em 0em' }}
            vertical id="articles">
            <Card.Group stackable={true} itemsPerRow={2}>
            {
                this.props.articles.map((article) => { 
                    return (<Card raised key={article.url}> 
                                    <Image src={article.urlToImage} />
                                    <Card.Content>
                                      <Card.Header>
                                        <a href={article.url} target="_blank">{article.title}</a>
                                      </Card.Header>
                                      <Card.Meta>
                                        <span className='date'>
                                          {article.author}
                                        </span>
                                      </Card.Meta>
                                      <Card.Description>
                                        {article.description}
                                      </Card.Description>
                                    </Card.Content>
                           </Card>); 
                })
            }
            </Card.Group>
            </Segment>
            </Container>
   </section>
    );
  }
}
export default connect(function(store) {
  return {
    articles: store.article.articles || [],
    userFetched: store.article.fetched
  };
})(Layout);