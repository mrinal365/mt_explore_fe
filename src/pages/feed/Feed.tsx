import Badge from '@/components/common/badge'
import Post from '@/components/feed/post/Post'
import StoryList from '@/components/feed/stories/StoryList'
import { POST_TYPES } from '@/constants/feed'
import { POST_LIST } from '@/dummy/feed'
import React from 'react'

type Props = {}

const Feed = (props: Props) => {
    const badgeList = [
        { title: 'All', selected: true },
        { title: 'News', selected: false },
        { title: 'Updates', selected: false },
        { title: 'Blogs', selected: false },
    ]
    const getFeed =( ) =>{
        return POST_LIST
    }
    return (
        <div className=''>
            <div className='flex justify-between items-center p'>
                <p className='text-[24px] font-medium'>Feed</p>
                <div className='bg-[white] rounded-[18px] min-w-[300px] py-2 px-4 border-[1px] border-[#D9D9D9]'>
                    <input type="text" placeholder='Search' className='outline-none' />
                </div>
            </div>
            <div className='mt-8'>
                <StoryList />
            </div>
            <div className='mt-8 flex gap-4'>
                {
                    badgeList.map((item, index) => (
                        <Badge key={index} title={item.title} selected={item.selected} />
                    ))
                }
            </div>
            <div className='mt-8 '>
                {
                    getFeed()?.map((item, index) => {
                        if(item?.type ===  POST_TYPES.BLOG){
                            return(
                                <Post postImage={item?.media?.[0]?.url} key={index} />
                            )
                        }
                        if(item?.type ===  POST_TYPES.UPDATE){
                            return(
                                <p>UPDATE</p>
                            )
                        }
                        if(item?.type ===  POST_TYPES.NEWS){
                            return(
                                <p>NEWS</p>
                            )
                        }
                        if(item?.type ===  POST_TYPES.GUIDE){
                            return(
                                <p>GUIDE</p>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Feed