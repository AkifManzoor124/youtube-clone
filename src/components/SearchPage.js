import React from 'react'
import './searchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneOutlinedIcon></TuneOutlinedIcon>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
                image= 'https://yt3.ggpht.com/a/AATXAJz9kUVuKI4GhUxSLfmsnVhKHsmfq9laoK8ILLok=s88-c-k-c0x00ffffff-no-rj'
                channel='Joe Rogan'
                verified
                subs='606M'
                noOfVideos={32123}
                description="Ayyyyyyy"
            />
            <hr/>
            <VideoRow
                views="1.4M"
                subs="659K"
                description='Do you want a FREE one hour of training...'
                timestamp ='52 seconds ago'
                channel = 'Akif Manzoor'
                title='Building a youtube clone with Akif'
                image="https://i.ytimg.com/an_webp/FBIVQGX1DCU/mqdefault_6s_480x270.webp?du=3000&sqp=CPfQxf0F&rs=AOn4CLBh7cz11Ib4KGdgZ49wDxEJ6Quc1A"
            ></VideoRow>
            <VideoRow
                views="1.4M"
                subs="659K"
                description='Do you want a FREE one hour of training...'
                timestamp ='52 seconds ago'
                channel = 'Akif Manzoor'
                title='Building a youtube clone with Akif'
                image="https://i.ytimg.com/an_webp/FBIVQGX1DCU/mqdefault_6s_480x270.webp?du=3000&sqp=CPfQxf0F&rs=AOn4CLBh7cz11Ib4KGdgZ49wDxEJ6Quc1A"
            ></VideoRow>
            <VideoRow
                views="1.4M"
                subs="659K"
                description='Do you want a FREE one hour of training...'
                timestamp ='52 seconds ago'
                channel = 'Akif Manzoor'
                title='Building a youtube clone with Akif'
                image="https://i.ytimg.com/an_webp/FBIVQGX1DCU/mqdefault_6s_480x270.webp?du=3000&sqp=CPfQxf0F&rs=AOn4CLBh7cz11Ib4KGdgZ49wDxEJ6Quc1A"
            ></VideoRow>
            <VideoRow
                views="1.4M"
                subs="659K"
                description='Do you want a FREE one hour of training...'
                timestamp ='52 seconds ago'
                channel = 'Akif Manzoor'
                title='Building a youtube clone with Akif'
                image="https://i.ytimg.com/an_webp/FBIVQGX1DCU/mqdefault_6s_480x270.webp?du=3000&sqp=CPfQxf0F&rs=AOn4CLBh7cz11Ib4KGdgZ49wDxEJ6Quc1A"
            ></VideoRow>
            <VideoRow
                views="1.4M"
                subs="659K"
                description='Do you want a FREE one hour of training...'
                timestamp ='52 seconds ago'
                channel = 'Akif Manzoor'
                title='Building a youtube clone with Akif'
                image="https://i.ytimg.com/an_webp/FBIVQGX1DCU/mqdefault_6s_480x270.webp?du=3000&sqp=CPfQxf0F&rs=AOn4CLBh7cz11Ib4KGdgZ49wDxEJ6Quc1A"
            ></VideoRow>                                                                                                          
        </div>
    )
}

export default SearchPage
