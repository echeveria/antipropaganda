import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

const POSTS_PER_PAGE = 5

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const slugParam = decodeURI(params.tag)

  // Намираме оригиналния таг
  const originalTag = Object.keys(tagData).find((key) => slug(key) === slugParam) || slugParam

  return genPageMetadata({
    title: originalTag,
    description: `${siteMetadata.title} ${originalTag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${slug(originalTag)}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  return Object.keys(tagCounts).map((tag) => ({
    tag: slug(tag), // гарантираме еднакви slug-ове в production
  }))
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const slugParam = decodeURI(params.tag)

  // Опитваме се да намерим оригиналния таг по slug
  const originalTag = Object.keys(tagData).find((key) => slug(key) === slugParam) || slugParam

  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags?.map((t) => slug(t)).includes(slug(originalTag))))
  )

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages,
  }

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={originalTag}
    />
  )
}
