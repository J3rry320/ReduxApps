import React from 'react'
import {  Card,Icon, Image } from "semantic-ui-react";
import Wiki from './wiki';

const WeatherCard=(props)=>{
    return(
        <Card fluid>
        <Image src='/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>{props.data.city.name}</Card.Header>
          <Card.Meta>
 <Wiki data={props.wiki}/>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
}
export default WeatherCard;