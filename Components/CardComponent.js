import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardCompnent extends Component {
    render() {
        const { data } = this.props;
        const { image } = JSON.parse(data.json_metadata);

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: `https://steemitimages.com/u/${data.author}/avatar` }} />
                        <Body>
                            <Text>{data.author}</Text>
                            <Text note>{new Date(data.created).toDateString()}</Text>
                        </Body>
                    </Left>
                </CardItem>
                {
                    image && image.length ?
                    <CardItem cardBody>
                        <Image 
                        source={{ uri: image[0] }} 
                        style={{ height:200, width:null, flex: 1 }} />
                    </CardItem> : null
                }
                <CardItem style={{ height: 20 }}>
                    <Text>{ data.active_votes.length } likes</Text>
                </CardItem>
                <CardItem>
                    <Text style={{ fontWeight:'900'}}>{ data.title }</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        { data.body.replace(/\n/g,' ').slice(0, 200) }
                    </Text>
                </CardItem>
                <CardItem style={{ height:45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{ color:'black', marginRight: 5 }}/> 
                            <Text>{ data.active_votes.length }</Text>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{ color:'black', marginRight: 5 }}/>
                            <Text>{ data.children }</Text>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{ color:'black' }}/>
                        </Button>
                    </Left>
                    <Right>
                        <Text>{ data.pending_payout_value }</Text>
                    </Right>
                </CardItem>
                {/* <CardItem>
                    <Text>
                        <Text style={{ fontWeight:'900'}}>Anpigon</Text>
                        이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는 포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다. 구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린 동영상 강의를 몇 개 찾을 수 있었습니다.
                    </Text>
                </CardItem> */}
            </Card>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});