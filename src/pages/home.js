import React from "react"
import {
        Dashboard as DashboardContainer, 
        TrainingAdvertiser as TrainingAdvertiserContainer,
        Announcements as AnnouncementsContainer,
        AppAdvertiser as AppAdvertiserContainer,
        ArticleList as ArticleListContainer
} from "../containers"


export default function Home(){
    return(
       <>
           <DashboardContainer/>
           <TrainingAdvertiserContainer/>
           <AnnouncementsContainer/>
           <AppAdvertiserContainer/>
           <ArticleListContainer/>
       </>
    )
}


