import React, {Component} from 'react';
import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base';

export default class Navbar extends Component{
  render(){
    return(
        <Header>
          <Left>
            {this.props.backButton == true ?
              (
                <Button
                  transparent
                  onPress={()=>this.props.nav.goBack()}
                >
                  <Icon name='arrow-back' />
                </Button>
              ) :null
            }
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>

          </Right>
        </Header>
    )
  }
}
// <Button transparent>
//   <Icon name='menu' />
// </Button>
