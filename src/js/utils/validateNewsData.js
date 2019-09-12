const validateNewsData = ( list = [] ) => (
  list.map( ({ urlToImage, description, author, content, ...item }) => {
    return{
      ...item,
      urlToImage: urlToImage  || null,
      description: description || null,
      author: author || null,
      content: content || null,
    }
  })
);

export default validateNewsData;