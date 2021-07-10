import React from "react"
import { Article, Titlebanner } from "../components"
import articlesData from "../fixtures/articles.json"

export default function articleList(){
    return(
        <>
            <Titlebanner>
                <Titlebanner.Frame>
                    <Titlebanner.Title>MAGAZINE</Titlebanner.Title>
                    <Titlebanner.ReadMore>Mostra tutti</Titlebanner.ReadMore>
                </Titlebanner.Frame>
            </Titlebanner>
            <Article>
                <Article.Frame>
                    {articlesData.map((data, index) => (
                        index < 4 ? 
                        <Article.Group>
                            <Article.Image src={process.env.PUBLIC_URL + '/images/articles/article-cover.jpg'} alt="Cover Image" />
                            <Article.Subgroup>
                                <Article.Title>{data.title}</Article.Title>
                                <Article.DescriptionContainer>
                                    <Article.Description>{data.description}</Article.Description>
                                </Article.DescriptionContainer>
                                <Article.Date>{data.date}</Article.Date>
                            </Article.Subgroup>
                        </Article.Group>
                        : null
                    ))}
                </Article.Frame>
            </Article>
        </>
    )
}