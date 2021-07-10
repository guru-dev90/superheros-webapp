import React from 'react';
import { 
    Group, 
    Subgroup,
    Background,  
    Container, 
    HeaderTitle,
    HeaderReadMore,
    Image,
    Title,
    Date,
    DescriptionContainer,
    Description
} from './styles/article';

export default function Article({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Article.Frame = function ArticleFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Article.HeaderTitle = function ArticleHeaderTitle({ children, ...restProps }) {
    return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
}

Article.HeaderReadMore = function ArticleHeaderReadMore({ children, ...restProps }) {
    return <HeaderReadMore {...restProps}>{children}</HeaderReadMore>;
}


Article.Group = function ArticleGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Article.Subgroup = function ArticleSubgroup({ children, ...restProps }) {
    return <Subgroup {...restProps}>{children}</Subgroup>;
}

Article.Image = function ArticleImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Article.Title = function ArticleTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Article.Date = function ArticleDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>;
}

Article.DescriptionContainer = function ArticleDescriptionContainer({ children, ...restProps }) {
    return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>;
}

Article.Description = function ArticleDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>;
}


