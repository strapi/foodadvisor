import delve from 'dlv'

export const articleAdapter = ({
  image,
  title,
  slug,
  seo,
}) => {
  return {
    image: delve(image, 'media') ? { alt: title, media: image.media } : null,
    title,
    description: seo.metaDescription,
    link: {
      href: `/blog/${slug}`,
    }
  }
}

export const articlesAdapter = (articles) => {
  return articles.map((article) => articleAdapter(article))
}

export const restaurantAdapter = ({
  images,
  name,
  slug,
  seo,
}) => {
  return {
    images: delve(images, 'images'),
    name,
    description: seo.metaDescription,
    link: {
      href: `/restaurants/${slug}`,
    }
  }
}

export const restaurantsAdapter = (restaurants) => {
  return restaurants.map((restaurant) => restaurantAdapter(restaurant))
}
