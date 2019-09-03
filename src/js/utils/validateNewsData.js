const validateNewsData = ( list = [] ) => (
  list.map( ({ urlToImage, description, author, content, ...item }) => {
    return{
      ...item,
      urlToImage: urlToImage  || null,
      description: description || `description: isn't available`,
      author: author || `isn't available`,
      content: content || `content isn't available `,
    }
  })
);

export default validateNewsData;